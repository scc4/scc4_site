import Vue from 'vue'
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {

    'pt-br':{

        contato: 'Contato',
        textoFaixa: 'Mais facilidades',
        saibaMais: 'Mais',
        inicio:[
            {
                slogan: "Apaixonados por TI",
                msg: "Acreditamos que, em um futuro próximo, todo processo de logistica será automatizado."
            },
            {
                slogan: "A gente inova." ,
                msg: "Para deixar a sua experiência de envio pelos Correios ainda melhor e ajudar você no seu dia a dia."

            },
            {
                slogan: "n.º 1 do Brasil",
                msg: "Com mais de 60% do market share a Boxcubo é lider de mercado no segmento de cubagem estática."

            },
            {
                slogan: "Fale conosco",
                msg: "Acreditamos que a comunicação é alma de qualquer negócio. Gostariamos muito de ouvir o que você tem a nos dizer"

            }
        ]
    },
    'en':{
        contato: 'Contact',
        saibaMais: 'More',
        textoFaixa: 'More Features',
        inicio:[
            {
                slogan: "IT Lovers",
                msg: "We believe that, in the near future, the entire logistics process will be automated."

            },
            {
                slogan: "Post Office best system",
                msg: "Portal Postal is the fastest growing software for the last 3 years in a row."

            },
            {
                slogan: "Brazil`s n.º 1",
                msg: "Holding more than 60% of market share, Boxcubo is the leadership in static dimensioning and cubing system."

            }, {
                slogan: "Talk to us",
                msg: "Comunication is the key. We´d be pleased to hear from you."

            }
        ]
    }
};
const i18n = new VueI18n({
    locale: 'pt-br',
    fallbackLocale: 'en',
    messages,
});

export default i18n;