
import { client, parseData } from './client';

export async function getRestaurants() {
    const request = await client
        .from('restaurants')
        .select()
        .order('created_at', { ascending: false });
    return parseData(request);
}

export async function getRestaurant(id) {
    const request = await client
        .from('restaurants')
        .select()
        .match({ id })
        .single();
    console.log('service', request)
    return parseData(request);
}

export async function createRestaurant({ name, location, notes, price, rating, type }) {
    const request = await client
        .from('restaurants')
        .insert({ name, location, notes, price, rating, type });
    return parseData(request);
}

export async function updateRestaurantById({ id, name, location, notes, price, rating, type }) {
    const request = await client
        .from('restaurants')
        .update({ name, location, notes, price, rating, type })
        .match({ id })
        .single();
    return parseData(request);
}

export async function deleteRestaurantById(id) {
    const request = await client
        .from('restaurants')
        .delete()
        .match({ id });
    return parseData(request);
}