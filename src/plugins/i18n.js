import Vue from 'vue'
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {

    'pt-br':{

        inicio:[
            {
                slogan: "Entregamos tecnologia",
                msg: "E simplificamos a sua logística. "

                                },
            {
                slogan: "Inovamos. " ,
                msg: "Para deixar a sua experiência de envio pelos Correios melhor ."

            },
            {
                slogan: "n.º 1 do Brasil",
                msg: "Com mais de 60% do market share a Boxcubo é líder de mercado no segmento de cubagem estática."

            },
            {
                slogan: "Fale conosco",
                msg: "Acreditamos que a comunicação é alma de qualquer negócio. Gostariamos muito de ouvir o que você tem a nos dizer"

            }
        ],
        lampadaTitulo: 'Tecnologia para melhores resultados',
        lampadaTexto: 'Somos uma equipe multidisciplinar, especializada em combinar tecnologia e logística. ' +
            'Podemos ajudar sua empresa a redesenhar e digitalizar seus processos. ',

        faixascc4: '"O coração e a alma da empresa são criatividade e inovação." - Bob Iger',
        featuresscc4:[
            {
                text: 'Conheça a máquina de cubagem estática mais vendida no Brasil.',
                head: 'BOXCUBO'
            },
            {
                text: 'Sistema de operação, gestão e comunicação com clientes. O melhor para agências de Correios Franqueadas.',
                head: 'PORTAL POSTAL'
            }
        ],
        history: 'Nossa história',
        items: [
            {
                type: 'Plataforma Hoito',
                content: 'Criada a primeira plataforma online para acompanhamento e interação de clientes com agências de Correios.'
            },
            {
                type: 'Portal Postal',
                content: 'Em consonância ao mundo em digitalização, criamos o Portal Postal. '
            },
            {
                type: 'Pré-postagem',
                content: 'Primeiro sistema a utilizar etiquetas de pré-postagem. '
            },
            {
                type: 'Boxcubo',
                content: 'Desenvolvemos a primeira máquina de cubagem estática para agências de Correios. '
            },
            {
                type: 'Reconhecimento',
                content: 'Ganhamos a certificação UX dos Correios. '
            }
        ],

        contato: 'Fale conosco',
        administrativo: 'Administrativo',
        comercial: 'Comercial',
        suporte: 'Suporte',
        textoFaixa: 'Mais facilidades',
        saibaMais: 'Quer saber mais',
        seunome: 'Seu nome',
        seuemail:'Seu email',
        seutelefone:'Seu telefone',
        suamensagem: 'Sua mensagem',
        enviar: 'Enviar',

        featuresportal:[
            {
                texto: 'Envio automático de todas as atualizações de rastreamento da sua encomenda. Em breve também por Whatsapp. ',
                heading: 'Seu cliente atualizado'
            },
            {
                texto: 'Nosso sistema registra uma foto de todas as suas encomendas no momento da pesagem. Confira o tamanho e peso de todas as suas caixas. ',
                heading: 'Imagem da sua caixa'
            },
            {
                texto: 'Integre seu ERP, loja virtual ou marketplace com o Portal Postal. Muito mais agilidade e organização na geração e conferencia de etiquetas.  ',
                heading: 'Totalmente integrado'
            },
            {
                texto: 'Procure por nossos Apps na Google Play ou na Apple Store e tenha controle total de seus envios diretamente do seu telefone. ',
                heading: 'Apps Android e IOS'
            }
        ]

    },

    'en':{
        inicio:[
            {
                slogan: "We deliver technology",
                msg: "To keep logistics simple."
            },
            {
                slogan: "Innovation",
                msg: "To make your postal experience better."
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
        lampadaTexto: 'We are a multidisciplinary team, specialized in combining technology and logistics. ' +
            'We can help your company redesign and turn your processes digital. ',

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
                content: 'Developed the first system for monitoring and interacting with customers online for post offices. '
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
                content: 'First static cubing machine for post offices. '
            },
            {
                type: 'Acknowledgment',
                content: 'We got the UX certification from Correios. '
            }
        ],

        contato: 'Contact us',
        administrativo: 'Administration',
        comercial: 'Sales',
        suporte: 'Support',
        saibaMais: 'To know more',
        textoFaixa: 'More Features',
        seunome: 'Your name',
        seuemail:'Your email',
        seutelefone:'Your phone',
        suamensagem: 'Your Menssage',
        enviar: 'Send',

        featuresportal:[
            {
                texto: 'Automatic sending of all tracking updates for your order. ',
                heading: 'Update your client'
            },
            {
                texto: 'Nosso sistema registra uma foto de todas as suas encomendas no momento da pesagem. Confira o tamanho e peso de todas as suas caixas. ',
                heading: 'Imagem da sua caixa'
            },
            {
                texto: 'Integre seu ERP, loja virtual ou marketplace com o Portal Postal. Muito mais agilidade e organização na geração e conferencia de etiquetas.  ',
                heading: 'Totalmente integrado'
            },
            {
                texto: 'Procure por nossos Apps na Google Play ou na Apple Store e tenha controle total de seus envios diretamente do seu telefone. ',
                heading: 'Apps Android e IOS'
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