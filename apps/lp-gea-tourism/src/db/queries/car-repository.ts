import { db } from '..';
import { SelectCar } from '../schema';
import { eq } from 'drizzle-orm';

export async function getCars() {
    return db.query.carsTable.findMany();
}

export async function getCarBySlug(slug: SelectCar['slug']) {
    return db.query.carsTable.findFirst({
        where: (fields, operators) => eq(fields.slug, slug)
    });
}
