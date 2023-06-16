import { User } from "@prisma/client";
import prisma from ".";

export const usersApi = {
  get,
  getById,
  create,
  update,
  delete: remove
};

async function get() {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (error) {
    return { error };
  }
}

async function getById(id: string) {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    return { user };
  } catch (error) {
    return { error };
  }
}

async function create(user: User) {
  try {
    const created = await prisma.user.create({ data: user });
    return { user: created };
  } catch (error) {
    return { error };
  }
}

async function update(user: User) {
  try {
    const { id, ...update } = user;
    const updated = await prisma.user.update({ data: update, where: { id } });
    return { user: updated };
  } catch (error) {
    return { error };
  }
}

async function remove(id: string) {
  try {
    await prisma.user.delete({ where: { id } });
    return {};
  } catch (error) {
    return { error };
  }
}
