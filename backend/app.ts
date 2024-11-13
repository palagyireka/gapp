// app.ts
/**
 * @file app.ts - Express szerver alkalmazás konfigurációja és indítása
 * @description  * Betölti a környezeti változókat és elindít egy Express szervert, amely API és weboldal útvonalakat is kezel, továbbá kapcsolódik egy MongoDB adatbázishoz.
 * @module app
 */

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import apiRoutes from "@routes/api";

/**
 * Környezeti változók betöltése
 * @description Betölti a környezeti változókat a .env fájlból
 */
dotenv.config();

/**
 * Express alkalmazás példány
 * @type {express.Application}
 */
const app: express.Application = express();

/**
 * MongoDB kapcsolódási URI
 * @description A MongoDB kapcsolódási URI, amely a `MONGODB_URI` környezeti változóból származik. Szükséges az adatbázis kapcsolat beállításához.
 * @type {string}
 */
const uri: string = process.env.MONGODB_URI || "";

/**
 * MongoDB kapcsolat inicializálása
 * @async
 * @function initializeDatabase
 * @description Inicializálja a MongoDB kapcsolatot az Uniform Resource Identifier - URI alapján. Ha a kapcsolódás sikeres, a konzolba egy üzenetet ír, ha sikertelen, egy hibát jelez.
 * @throws {Error} Ha a kapcsolódás sikertelen
 * @returns {Promise<void>}
 */
mongoose
  .connect(uri)
  .then((): void => {
    console.log("Connected to MongoDB");
  })
  .catch((error: Error): void => {
    console.error("MongoDB connection error:", error);
  });

/**
 * CORS middleware konfigurálása
 * @description Beállítja a CORS middleware-t az Express alkalmazáshoz. Az `origin` opció meghatározza, hogy melyik domainről érkezhetnek kérések, az 5173-as domain a Vite front-end.
 * @type {Object}
 * @param {Object} options - A CORS beállítások.
 * @param {string} options.origin - A megengedett domain (http://localhost:5173).
 */
app.use(cors({ origin: "http://localhost:5173" }));

/**
 * @description Az API-hoz tartozó útvonalak regisztrálása. Minden olyan kérés, amely `/api` előtaggal kezdődik, ezen a routeren keresztül kerül feldolgozásra.
 * @type {express.Router}
 */
app.use("/api", apiRoutes);

/**
 * Szerver indítása
 *  @description Elindítja az Express szervert a 4000-es porton, és egy konzol üzenetet ír ki a sikeres indításról.
 * @param {number} port - A port száma, amelyen az alkalmazás hallgat (4000).
 * @returns {void}
 * @type {number}
 */
const PORT: number = 4000;
app.listen(PORT, (): void => {
  console.log(`GAPP is listening on port ${PORT}.`);
});
