import express, { Request, Response } from "express";
import searchController from "@controllers/search-controller";
import randomPlant from "@controllers/randomplant";

/**
 * @file api.ts - API útvonalak kezelése
 * @module api
 * @description Az `api.ts` fájl az API fő útvonalait tartalmazza. Ezen keresztül kezeli az app a keresési és a véletlen növényekkel kapcsolatos kéréseket.
 */

/**
 * Az Express Router példánya, amely az API útvonalak kezelésére szolgál.
 * @type {Router}
 */
const gapp = express.Router();

/**
 * @route GET /api/search
 * @description GET keresési útvonal (`/search`), amely egy keresési kérést kezel. Az útvonal két query paramétert használ: `q` (kötelező keresési kulcsszó) és `f` (opcionális szűrő).
 * @param {Request} req - A kérést (request) tartalmazó objektum, amely a `q` és `f` query paramétereket tartalmazhatja.
 * @param {Response} res - A választ (response) tartalmazó objektum.
 * @param {string} req.query.q - Keresési kulcsszó
 * @param {string} [req.query.f] - Opcionális kategória szűrő
 * @returns {Promise<void>} - Egy ígéret, amely a keresés eredményét JSON formátumban küldi vissza, vagy hibaüzenetet ad.
 */
gapp.get("/search", async (req: Request, res: Response): Promise<void> => {
  try {
    const { q, f } = req.query;
    let filter = "";
    if (f) {
      filter = String(f);
    }
    if (q) {
      const result = await searchController(String(q), filter, res);
      res.json(result);
    } else {
      res.send("Error! Undefined search keyword.");
    }
  } catch (e) {
    console.log("Error trying: ", e);
  }
});

/**
 * @description GET véletlen növény útvonal (`/api/random`), amely véletlenszerűen egy növény adatait küldi vissza.
 * @route GET /api/random
 * @param {Request} req - A kérést tartalmazó objektum.
 * @param {Response} res - A választ tartalmazó objektum.
 * @returns {Promise<void>} Egy ígéret, amely a véletlen növény adatait JSON formátumban küldi vissza, vagy hibaüzenetet ad.
 */
gapp.get("/random", async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await randomPlant(res);
    res.json(result);
  } catch (e) {
    console.log("Error trying to get random plant:", e);
  }
});

export default gapp;
