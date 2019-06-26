module.exports = {
    vueI18n: {
        fallbackLocale: "ru",
        silentTranslationWarn: true
    },
    locales: [{
            code: "ru",
            iso: "ru-RU",
            name: "Русский"
        },
        // {
        //     code: "en",
        //     iso: "en-US",
        //     name: "English"
        // },
        {
            code: "kz",
            iso: "kz-KZ",
            name: "Қазақша"
        }
    ],
    defaultLocale: "ru",
    strategy: "prefix_except_default",
    lazy: false,
    langDir: null,
    differentDomains: false,
    detectBrowserLanguage: {
        cookieKey: 'i18n_redirected',
        useCookie: true,
        // alwaysRedirect: true
    },
    seo: true,
    vuex: {
        moduleName: "i18n",
        mutations: {
            setLocale: "I18N_SET_LOCALE",
            setMessages: "I18N_SET_MESSAGES"
        }
    },
    beforeLanguageSwitch: () => null,
    onLanguageSwitched: () => null
}