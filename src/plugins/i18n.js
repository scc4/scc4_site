import Vue from 'vue'
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {

    'pt-br':{

        inicio:[
            {
                slogan: "Entregamos tecnologia",
                msg: "Por trás de qualquer coisa simples, existe uma cadeia de suprimentos complexa."

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
        ],
        lampadaTitulo: 'Ajudamos você',
        lampadaTexto: 'A fase de entrega é onde você pode desenvolver relacionamentos poderosos com seu cliente. ' +
            'E a experiência de envio pode ser tão importante quanto o produto. \n' +
            'Por isso nosso time conta com desenvolvedores, técnicos e engenheiros que além de tecnologia são especialistas em logística. ',
        faixascc4: '"O coração e a alma da empresa são criatividade e inovação." - Bob Iger',
        featuresscc4:[
            {
                text: 'Conheça a máquina de cubagem estática mais vendida no Brasil',
                head: 'BOXCUBO'
            },
            {
                text: 'O melhor sistema para operação e e gestão de AGFs. e comunicação integrada com os clientes.',
                head: 'PORTAL POSTAL'
            }
        ],
        history: 'Nossa história',
        items: [
            {
                type: 'Plataforma Hoito',
                content: 'Criada a primeira plataforma para acompanhamento e interção com clientes de agências de Correios online.'
            },
            {
                type: 'Portal Postal',
                content: 'Criamos o Portal Postal para dar resposta à um mundo em digitalização. '
            },
            {
                type: 'Pré postagem',
                content: 'Primeiro sitema a utilizar etiquetas de pré postagem. '
            },
            {
                type: 'Boxcubo',
                content: 'Primeira máquina de cubagem estática para agências de Correios. '
            },
            {
                type: 'Reconhecimento',
                content: 'Ganhamos o selo UX dos Correios. '
            }
        ],

        contato: 'Contato',
        administrativo: 'Administrativo',
        comercial: 'Comercial',
        suporte: 'Suporte',
        textoFaixa: 'Mais facilidades',
        saibaMais: 'Quer saber mais',
        seunome: 'Seu nome',
        seuemail:'Seu email',
        seutelefone:'Seu telefone',
        suamensagem: 'Sua Mensagem',
        enviar: 'Enviar'
    },
    'en':{


        inicio:[
            {
                slogan: "We deliver technology",
                msg: "Behind anything simple, there is a complex supply chain."

            },
            {
                slogan: "Post Office best system",
                msg: "To make your postage experience even better and help you in your day to day."

            },
            {
                slogan: "Brazil`s n.º 1",
                msg: "Holding more than 60% of market share, Boxcubo is the leadership in static dimensioning and cubing system."

            }, {
                slogan: "Talk to us",
                msg: "Comunication is the key. We´d be pleased to hear from you."

            }
        ],
        lampadaTitulo: 'We can help you',
        lampadaTexto: 'The delivery phase is where you can develop powerful relationships with your customer. ' +
            'And the shipping experience can be just as important as the product. ' +
            'That is why our team includes developers, technicians and engineers who, in addition to technology, are specialists in logistics. ',
        faixascc4: '"The heart and soul of the company is creativity and innovation." - Bob Iger',
        featuresscc4:[
            {
                text: 'Discover the best-selling static cubing and weighing system in Brazil.',
                head: 'BOXCUBO'
            },
            {
                text: 'The best system for operation and management of AGFs and integrated communication with customers.',
                head: 'PORTAL POSTAL'
            }

        ],
        history: 'Our history',
        items: [
            {
                type: 'Plataforma Hoito',
                content: 'Developed the first system for monitoring and interacting with customers online  for post offices.'
            },
            {
                type: 'Portal Postal',
                content: 'We created the Postal Portal to respond to a world in digitalization. '
            },
            {
                type: 'Shipping label',
                content: 'First system to use pre shipping label. '
            },
            {
                type: 'Boxcubo',
                content: 'First static cubing machine for post offices.'
            },
            {
                type: 'Acknowledgment',
                content: 'We got the UX certification from Correios. '
            }
        ],
        contato: 'Contact',
        administrativo: 'Administration',
        comercial: 'Sales',
        suporte: 'Support',
        saibaMais: 'To know more',
        textoFaixa: 'More Features',
        seunome: 'Your name',
        seuemail:'Your email',
        seutelefone:'Your phone',
        suamensagem: 'Your Menssage',
        enviar: 'Send'
    }
};
const i18n = new VueI18n({
    locale: 'pt-br',
    fallbackLocale: 'en',
    messages,
});

export default i18n;