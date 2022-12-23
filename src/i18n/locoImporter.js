// import dotenv from 'dotenv';
import { storeTranslationToDisk } from "typesafe-i18n/importer";
import fetch from "node-fetch";
import { locales } from "./i18n-util";

/**
 * @typedef {import("./i18n-types").BaseTranslation} BaseTranslation
 * @typedef {import("./i18n-types").Locales} Locales
 * @typedef {import("typesafe-i18n/importer").ImportLocaleMapping} ImportLocaleMapping
 */

// dotenv.config();

/** @param {Locales} locale */
const getDataFromAPI = async (locale) => {
	// if (typeof process.env.LOCO_EXPORT_KEY === 'undefined') {
	//   throw new Error('Please add LOCO_EXPORT_KEY in your .env file');
	// }

	// const searchParams = new URLSearchParams({
	//   index: 'id', // Make sure fetched jsons keys will be the ids of translations, not the text
	//   status: 'translated', // only fetch the finished translations
	//   key: 'lQ2cpqEE-KKqVPtHeNraTR45KfOVC2JT',
	// });

	const searchParams =
		"index=id&status=translated&key=lQ2cpqEE-KKqVPtHeNraTR45KfOVC2JT";

	const translation = await fetch(
		`https://localise.biz/api/export/locale/${locale}.json?${searchParams}`
	);

	return /** @type {Promise<BaseTranslation>} */ translation.json();
};

/** @param {Locales} locale */
const importTranslationsForLocale = async (locale) => {
	const translations = await getDataFromAPI(locale);

	/** @typedef {ImportLocaleMapping} */
	const localeMapping = {
		locale,
		translations,
	};

	const result = await storeTranslationToDisk(localeMapping);

	console.log(`translations imported for locale '${result}'`);
};

importTranslationsForLocale("en");
importTranslationsForLocale("ka");
