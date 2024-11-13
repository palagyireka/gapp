import express from "express";
import Plant from "../models/plant";

/**
 * Keresési vezérlőfüggvény, amely a növények kereséséért felelős a megadott keresési kulcsszó (`q`)
 * és az opcionális szűrő (`f`) alapján. A keresési feltételeket a növények `name` és `category` mezőire alkalmazza.
 *
 * @param {string} q - A keresési kulcsszó, amely a növények `name` mezőjére vonatkozik.
 * @param {string | undefined} f - Opcionális szűrő, amely a `category` mezőre vonatkozik.
 * @param {express.Response} res - Az Express válasz objektuma, amelyen keresztül hibát jelezhetünk.
 * @returns {Promise<Plant[] | undefined>} A keresés eredménye egy növényeket tartalmazó tömbként, vagy undefined, ha hiba történt.
 */
const searchController = async (
  q: string,
  f: string | undefined,
  res: express.Response
) => {
  try {
    // Növények keresése a `name` és `category` mezők alapján, amelyek megegyeznek a keresési feltételekkel
    const plants = await Plant.find({
      name: { $regex: q, $options: "i" },
      category: { $regex: f, $options: "i" },
    });
    return plants;
  } catch (e) {
    console.error("Error in searchController:", e);
    // Hibaüzenet küldése válaszként, ha a keresés nem sikerült
    res.status(500).json({ error: "Failed to search for plants" });
  }
};

export default searchController;
