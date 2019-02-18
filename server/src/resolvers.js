import User from "./models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { APP_SECRET, getUserId } from "./utils";

export const resolvers = {
  Query: {
    async getUser(root, { _id }) {
      return await User.findById(_id);
    },

    async allUsers() {
      return await User.find();
    }
  },

  Mutation: {
    async updateUser(root, { _id, input }) {
      return await User.findOneAndUpdate(
        {
          _id
        },
        input,
        {
          new: true
        }
      );
    },

    async deleteUser(root, { _id }) {
      return await User.findOneAndRemove({
        _id
      });
    },

    async signup(root, { username, email, password }, { models }) {
      // 1 encrypt the user's password
      const passwordEncrypted = await bcrypt.hash(password, 10);

      // 2 store the new user in the database
      const user = await User.create({
        username: username,
        email: email,
        password: passwordEncrypted
      });

      // 3 generate a jwt, signed with the app secret
      const token = jwt.sign({ userId: user.id }, APP_SECRET);

      // 4 return token and user for AuthPayload
      return {
        token,
        user
      };
    },

    async login(root, { email, password }, { models, secret }) {
      // 1 retrieve user by email
      var user = await User.findOne({ email: email }, function(err, user) {
        if (err) {
          console.log("Email search: " + err);
        } else {
          console.log("Found " + user);
        }
      });
      if (!user) {
        // invalid email, check username
        user = await User.findOne({ username: email }, function(err, user) {
          if (err) {
            console.log("Username search: " + err);
          } else {
            console.log("Found " + user);
          }
        });
      }
      if (!user) {
        // neither email or username found
        throw new Error("No such user found");
      }

      // 2 compare passwords
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error("Invalid password");
      }

      // 3 return token and user for AuthPayload
      return {
        token: jwt.sign({ userId: user.id }, APP_SECRET),
        user
      };
    }
  }
};
