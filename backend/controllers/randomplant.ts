import express from "express";
import Plant from "../models/plant";

/**
 * Vezérlőfüggvény, amely véletlenszerűen kiválaszt egy növényt az adatbázisból.
 * Ha nincs elérhető növény az adatbázisban, 404-es hibaüzenetet küld vissza.
 *
 * @param {express.Response} res - Az Express válasz objektuma, amelyen keresztül a válasz küldése történik.
 * @returns {Promise<Plant | undefined>} Egy véletlenszerűen kiválasztott növény objektuma, vagy undefined, ha hiba történt.
 */
const randomPlant = async (res: express.Response) => {
  try {
    // Egy növény kiválasztása véletlenszerűen az adatbázisból, az aggregate függvénnyel, ami elsősorban mintavételre való. Itt a mintahalmazunk mérete mindössze egy darab növény.
    const plant = await Plant.aggregate([{ $sample: { size: 1 } }]);
    if (!plant) {
      // Ha nincs elérhető növény, 404-es hibaüzenetet küldünk vissza
      return res.status(404).json({ error: "No plant found in database." });
    }
    const onePlant = plant[0];

    return onePlant;
  } catch (e) {
    console.error("Error in randomPlant:", e);
    // Hibaüzenet küldése válaszként, ha a véletlenszerű növény keresése nem sikerült
    res
      .status(500)
      .json({ error: "Failed to search for plant in randomPlant" });
  }
};

export default randomPlant;
