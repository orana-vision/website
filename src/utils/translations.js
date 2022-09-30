const translations = {
    en: {
        hello: "hello",
    },
    gr: {
        hello: "geia sou re brokolo",
    },
};

export default function translate(language) {
    if (language === "en") return translations.en;
    else if (language === "gr") return translations.gr;
}
