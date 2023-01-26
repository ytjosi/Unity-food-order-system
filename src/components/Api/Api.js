import { pb } from "@/utils/Pocket";


export const getUsers = await pb.collection('users').getList(1, 50, {
    filter: 'verified = true',
});