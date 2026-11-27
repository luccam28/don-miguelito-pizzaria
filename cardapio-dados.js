/*
  Cardápio digital — Don Miguelito Pizzaria
  Fonte: cardapio.pdf enviado pelo cliente. 
  As bordas e itens com valores idênticos foram agrupados para refletir a diagramação exata do PDF.
*/
window.CARDAPIO = [
  {
    id: 'entradas', curto: 'Crostini e Pizza rolls', titulo: 'Crostini e Pizza rolls',
    grupos: [
      {
        titulo: 'Crostini', colunas: [],
        dados: `
Crostini de Parmesão com Alecrim e Manjericão|Acompanha molho Don Miguelito|45,90
Crostini de Parmesão com Alecrim e Manjericão e Burrata (NOVIDADE)|Acompanha molho Don Miguelito|80,90
`
      },
      {
        titulo: 'Pizza Rolls', nota: 'Porção com 8 unidades.', colunas: [],
        dados: `
Atum|Atum em pedaços com cream cheese, alho-poró e parmesão|68,90
Calabresa Moída com Mussarela|Calabresa moída com mussarela, parmesão e Catupiry|57,90
Goiabada com Catupiry|Goiabada com Catupiry|57,90
Queijo Brie com Mel|Queijo brie com mel|68,90
Romeu e Julieta|Goiabada com mussarela|63,90
`
      }
    ]
  },
  {
    id: 'calzones', curto: 'Calzones', titulo: 'Calzones',
    grupos: [{
      colunas: [],
      dados: `
Calzone Calabresa|Calabresa, cebola roxa, cheddar e mussarela|80,90
Calzone Dois Queijos|Dois queijos|68,90
Calzone Frango|Frango, Catupiry, milho, mussarela e bacon|84,90
Calzone Quatro Queijos|Mussarela, Catupiry, provolone e gorgonzola|91,90
Calzone Vegetariana|Milho, palmito, ervilha, brócolis, tomate-cereja e mussarela|80,90
`
    }]
  },
  {
    id: 'pizzas-salgadas', curto: 'Pizzas salgadas', titulo: 'Pizzas salgadas',
    intro: '',
    grupos: [{
      colunas: ['Broto', 'Grande'],
      dados: `
Abobrinha (Zucchini)|Abobrinha, mussarela, parmesão e alho frito|58,90|97,90
Abobrinha do Chef|Cream Cheese e Abobrinha com Alho|56,90|94,90
Alho|Mussarela e alho frito|41,90|68,90
Amatriciana|Pancetta, cebola roxa, tomate-cereja, alecrim e parmesão|53,90|88,90
Atum|Atum e cebola roxa|64,90|106,90
Atum com Mussarela|Atum e mussarela|66,90|111,90
Bacon|Mussarela e bacon|44,90|73,90
Baiana|Calabresa moída, molho de pimenta, ovos, cebola roxa e mussarela|41,90|68,90
Bauru|Presunto, mussarela, orégano e tomates italianos|44,90|73,90
Brócolis|Brócolis, mussarela e alho frito|44,90|74,90
Calabresa|Calabresa fatiada e cebola roxa|34,90|57,90
Calabresa com Catupiry|Calabresa e Catupiry|44,90|74,90
Camarão do Chef|Camarão temperado no alho em lâminas e azeite, cream cheese, alho-poró e cebola roxa|85,90|141,90
Canadense|Lombo canadense, mussarela de búfala, palmito, bacon e rúcula|68,90|113,90
Caprese|Mussarela de búfala, tomate-cereja, manjericão e patê de azeitona preta|63,90|105,90
Caponata de Berinjela|Caponata de berinjela e mussarela|51,90|86,90
Carne Seca com Catupiry|Carne seca e Catupiry|68,90|113,90
Carne Seca com Mussarela|Carne seca, cebola roxa e mussarela|64,90|106,90
Catumilho|Milho e Catupiry|41,90|68,90
Cinco Queijos|Mussarela, Catupiry, gorgonzola, provolone e parmesão|71,90|119,90
Colonial|Presunto, champignon, bacon, Catupiry e parmesão|71,90|119,90
Don Alex|Cream Cheese e Pepperoni|71,90|119,90
Don Cândido|Calabresa moída, ovo, parmesão, pimenta e cebola roxa|53,90|88,90
Don Carlos Kubo|Atum, tomate em rodelas, cebola roxa, provolone e parmesão|75,90|125,90
Don Corsito|Caponata de berinjela com mussarela e gorgonzola|64,90|106,90
Don Diego|Lombo, bacon, mussarela e Catupiry|78,90|130,90
Don Fernando|Atum, pepperoni, cebola roxa e mussarela|75,90|126,90
Don Levicius|Calabresa fatiada, cebola roxa e Catupiry|46,90|78,90
Don Luigi|Mussarela, Gorgonzola, Queijo Brie e Geléia|81,90|135,90
Don Marcos|Cream cheese, salmão, cebola roxa e rúcula|96,90|160,90
Don Miguelito|Frango desfiado, parmesão e Catupiry|68,90|113,90
Don Riva|Palmito, mussarela e Catupiry|71,90|118,90
Don Thallito|Mussarela, frango, cheddar, bacon e Doritos|71,90|119,90
Don Zeca|Atum, cream cheese, alho-poró, parmesão e tomate seco|83,90|139,90
Dois Queijos|Mussarela e Catupiry|51,90|86,90
Donna Aline|Calabresa moída, cream cheese e parmesão|60,90|101,90
Donna Giovanna (NOVIDADE) |Abobrinha, Caponata de Berinjela, Mussarela, Parmesão e Alho Frito|47,90|79,90
Donna Gisleni|Brócolis, gergelim, alho frito e azeite português|41,90|68,90
Donna Jô|Mussarela, queijo brie e presunto parma|81,90|135,90
Donna Terezinha|Peito de peru, Catupiry, palmito e mussarela|68,90|113,90
Dr. Anderson Lafuza|Mussarela de búfala, presunto, tomate e orégano|62,90|104,90
Escarola|Escarola refogada, mussarela e bacon|48,90|81,90
Frango com Catupiry|Frango e Catupiry|44,90|74,90
Frango com Cheddar e Bacon|Frango, cheddar e bacon|61,90|102,90
Frango do Chef Amós|Frango, bacon e mussarela|53,90|89,90
Italiana|Escarola refogada, calabresa moída, palmito, cebola roxa e mussarela|56,90|94,90
Lombo com Abacaxi|Lombo canadense, mussarela, Catupiry e abacaxi|75,90|125,90
Marguerita|Mussarela, parmesão, tomate em rodelas e manjericão|48,90|80,90
Marguerita do Chef Amós|Mussarela de búfala, tomate-cereja e manjericão|55,90|93,90
Mussarela|Mussarela (no broto, também com azeitona)|37,90|63,90
Mussarela de Búfala|Mussarela de búfala|48,90|80,90
Napolitana do Chef Amós|Alho fresco, azeite português, parmesão e manjericão|51,90|86,90
Palmito com Catupiry|Palmito e Catupiry|68,90|113,90
Palmito com Mussarela|Palmito e mussarela|67,90|112,90
Pepperoni|Mussarela, pepperoni e parmesão|72,90|120,90
Pepperoni com Catupiry|Pepperoni e Catupiry|71,90|118,90
Portuguesa|Presunto, ovo, ervilha fresca, cebola roxa e mussarela|48,90|80,90
Primavera|Palmito, bacon, milho e mussarela|69,90|116,90
Quatro Queijos|Mussarela, Catupiry, gorgonzola e provolone|64,90|106,90
Romana Aliche|Mussarela, aliche e tomate|75,90|125,90
Rúcula|Mussarela de búfala, rúcula e tomate seco|51,90|86,90
Salmão com Camarão|Cream cheese, alho-poró, salmão, camarão, cebola roxa e rúcula|111,90|186,90
Siciliana|Champignon, bacon e Catupiry|71,90|119,90
Toscana|Calabresa e mussarela|44,90|73,90
Três Queijos|Mussarela, Catupiry e parmesão|58,90|97,90
Vegetariana|Brócolis, palmito, ervilha fresca, milho, tomate-cereja e mussarela|55,90|93,90
`
    }]
  },
  {
    id: 'pizzas-doces', curto: 'Pizzas doces', titulo: 'Pizzas doces',
    intro: '',
    grupos: [{
      colunas: ['Broto', 'Grande'],
      dados: `
Abacaxi|Doce de leite, abacaxi e canela|45,90|75,90
Banana|Banana, leite condensado e canela em pó|34,90|57,90
Banana Nevada|Creme de leite, banana, canela e chocolate branco|45,90|75,90
Banoffee|Banana flanbada com canela, chocolate branco gratinado e doce  de leite gratinado|53,90|88,90
Benjamim Duo|Chocolate ao leite, chocolate preto e Negresco|45,90|75,90
Brigadeiro|Chocolate com cobertura de granulado|40,90|67,90
Chocolate ao Leite|Chocolate ao leite|37,90|63,90
Chocolate Branco com Frutas Vermelhas|Chocolate branco com frutas vermelhas|45,90|75,90
Chocolate com Uva|Chocolate com uva|42,90|71,90
Cream Cheese com Frutas Vermelhas|Cream cheese com frutas vermelhas|45,90|75,90
Doce de Leite com Uva|Doce de leite com uva|45,90|75,90
Kit Kat|Chocolate e Kit Kat em pedaços|44,90|73,90
Lucy|Doce de leite e coco|44,90|74,90
Miguelito|Chocolate e M&M's|53,90|88,90
Mussarela com Doce de Leite|Mussarela com doce de leite|48,90|81,90
Nutella com Morango|Nutella e morango|52,90|87,90
Prestígio|Chocolate ao leite e coco ralado fresco|45,90|75,90
Romeu & Julieta com Catupiry|Goiabada e Catupiry|44,90|74,90
Romeu & Julieta com Mussarela|Goiabada e mussarela|44,90|74,90
Sensação|Chocolate e morango|45,90|75,90
`
    }]
  },

   {
    id: 'bordas', curto: 'Bordas e adicionais', titulo: 'Bordas e adicionais',
    intro: '',
    grupos: [
      {
        titulo: 'Bordas das pizzas salgadas', colunas: ['Broto', 'Grande'],
        dados: `
Borda Catupiry e Cheddar||23,90|23,90
Borda de Chocolate||17,90|23,90
Borda de Gergelim||6,90|9,90
Borda Mussarela||28,90|28,90
Borda Vulcão (Catupiry, Cheddar e Mussarela)||34,90|51,90
`
      },

           {
        titulo: 'Adicionais', colunas: [],
        dados: `
Alho frito||5,90
Bacon||9,90
Calabresa||9,90
Camarão||34,90
Catupiry||17,90
Cebola roxa||5,90
Cheddar||17,90
Gorgonzola||17,90
Massa||11,90
Milho||5,90
Molho de tomate||5,90
Mussarela||17,90
Palmito||17,90
Parmesão||17,90
Pepperoni||17,90
Queijo brie||17,90
Tomate italiano||5,90
`
      },
           {
        titulo: 'Bordas das pizzas doces', nota: 'Escolha 1 opção de borda.', colunas: ['Broto', 'Grande'],
        dados: `
Borda de Chocolate||17,90|23,90
Borda de Gergelim||6,90|9,90
Borda Mussarela||28,90|28,90
Borda Vulcão (Catupiry, Cheddar e Mussarela)||34,90|51,90
Borda Vulcão de Chocolate||28,90|46,90
`
      },

    
    ]
  },
  {
    id: 'esfihas', curto: 'Esfihas', titulo: 'Esfihas',
    intro: '',
    grupos: [
      {
        titulo: 'Esfihas salgadas', colunas: [],
        dados: `
2 Queijos||15,90
Abobrinha com Mussarela, Parmesão e Alho Frito||13,90
Aliche com Mussarela|Aliche com mussarela, parmesão e tomate|19,90
Atum com Cebola||15,90
Atum com Mussarela||17,90
Baiana||6,90
Bacon com Mussarela||12,90
Bauru||6,90
Berinjela com Mussarela||5,90
Brócolis com Mussarela e Alho Frito||11,90
Calabresa||6,90
Calabresa com Catupiry||11,90
Calabresa com Mussarela||10,90
Caprese||17,90
Carne||9,90
Carne com Mussarela||11,90
Carne Seca com Catupiry||15,90
Carne Seca com Cebola||14,90
Carne Seca com Mussarela||14,90
Don Corsito|Caponata de berinjela com mussarela e gorgonzola|20,90
Don Thallito||20,90
Escarola com Mussarela||12,90
Frango com Catupiry||13,90
Frango com Mussarela||12,90
Mussarela||5,90
Mussarela de Búfala||14,90
Milho com Catupiry||10,90
Palmito com Catupiry||14,90
Palmito com Mussarela||15,90
Palmito, Brócolis e Mussarela||18,90
Peito de Peru com Catupiry||15,90
Pepperoni com Mussarela||17,90
Portuguesa||14,90
Quatro Queijos||20,90
Salmão com Alho-Poró e Cream Cheese||22,90
`
      },
      {
        titulo: 'Esfihas doces', colunas: [],
        dados: `
Banana com Leite Condensado e Canela||12,90
Banana Nevada||20,90
Banoffee||22,90
Brigadeiro||15,90
Chocolate ao Leite||14,90
Chocolate ao Leite com Chocolate Branco e Oreo||18,90
Chocolate ao Leite com Uva Verde||20,90
Chocolate Branco||14,90
Chocolate Branco com Frutas Vermelhas||20,90
Chocolate Branco com Uva Verde||20,90
Chocolate com Kit Kat||19,90
Chocolate com M&M's||20,90
Chocolate com Morango||20,90
Cream Cheese com Frutas Vermelhas||21,90
Doce de Leite com Abacaxi e Canela||20,90
Doce de Leite com Coco||18,90
Doce de Leite com Chocolate ao Leite||20,90
Doce de Leite com Uva Verde||21,90
Goiabada com Catupiry||20,90
Goiabada com Mussarela||20,90
Mussarela com Doce de Leite||22,90
Nutella com Kiwi||22,90
Nutella com Morango||22,90
Prestígio||20,90
`
      }
    ]
  },
  {
    id: 'hamburgueres', curto: 'Hambúrgueres', titulo: 'Hambúrgueres',
    intro: '',
    grupos: [{
      colunas: [],
      dados: `
Burger Caprese|Hambúrguer de 180 g, mussarela de búfala, tomate-cereja, manjericão e pesto de azeitona no pão brioche com gergelim. Acompanha fritas.|55,90
Burger de Rúcula|Hambúrguer de 120 g com pasta de alho, tomate seco e queijo prato no pão brioche com gergelim. Acompanha fritas.|51,90
Burger Don Luigi|Hambúrguer de 180 g, pesto de manjericão, mussarela, gorgonzola, queijo brie e geleia de pimenta no pão australiano. Acompanha fritas.|57,90
Burger Don Marcos|Hambúrguer de salmão de 120 g com cream cheese, alho-poró, cebola roxa e rúcula no pão australiano. Acompanha fritas.|68,90
Burger Duplo Bacon|Dois hambúrgueres de 100 g, queijo prato, cheddar, bacon e molho Miguelito no pão brioche. Acompanha fritas.|51,90
Burger Duplo Miguelito|Dois hambúrgueres de 100 g, queijo prato, cheddar, molho Miguelito e salada no pão brioche. Acompanha fritas.|45,90
X-Burguer Miguelito|Pão brioche com gergelim, hambúrguer de 100 g e queijo prato. Acompanha fritas.|34,90
`
    }]
  },
  {
    id: 'porcoes', curto: 'Porções e Aperitivos', titulo: 'Porções e Aperitivos',
    grupos: [{
      colunas: [],
      dados: `
Batata Frita (300g)||22,90
Dadinho de Tapioca (400g)||45,90
Mandioca Frita (300g)||18,90
Porção Anéis de Cebola (330g)||17,90
Porção de Fritas|Batata frita com cheddar e bacon.|40,90
Porção de Provolone à Milanesa|Cubos de provolone empanados e crocantes por fora, com aquele queijo derretido e irresistível por dentro. Perfeito para compartilhar!|57,90
Porção de Queijos (parmesão, gorgonzola e provolone)|Uma deliciosa seleção de queijos parmesão, gorgonzola e provolone, perfeita para compartilhar e apreciar diferentes sabores e texturas em uma só porção.|57,90
`
    }]
  },
  {
    id: 'bebidas', curto: 'Bebidas', titulo: 'Bebidas',
    grupos: [
      {
        titulo: 'Águas, refrigerantes e sodas', colunas: [],
        dados: `
Água com gás||9,90
Água Nestlé||5,90
Coca-Cola 200 ml||5,90
Coca-Cola 310 ml (lata)||11,90
Coca-Cola 600 ml Zero||17,90
Coca-Cola 1 L||20,90
Coca-Cola 2 L||22,90
Coca-Cola tradicional (garrafa de vidro 250 ml)||11,90
Coca-Cola Zero 350 ml||11,90
Coca-Cola Zero 1 L||20,90
Coca-Cola Zero 2 L||22,90
Coca-Cola Zero (garrafa de vidro 250 ml)||11,90
Guaraná Antarctica 200 ml||5,90
Guaraná Antarctica lata 350 ml||11,90
Guaraná Antarctica 1 L||18,90
Guaraná Antarctica 1,5 L||19,90
Guaraná Antarctica 2 L||20,90
Guaraná Antarctica Zero 350 ml||11,90
Guaraná Antarctica Zero 600 ml||11,90
Guaraná Antarctica Zero 1,5 L||19,90
Guaraná Antarctica Zero 2 L||20,90
H2OH!||13,90
Pink Fresh||17,90
Schweppes Citrus||11,90
Schweppes Tônica||10,90
Soda Italiana||17,90
`
      },
      {
        titulo: 'Energéticos', colunas: [],
        dados: `
Red Bull||23,90
`
      },
      {
        titulo: 'Sucos naturais', colunas: ['Copo 330 ml', 'Jarra 750 ml'],
        dados: `
Abacaxi||15,90|32,90
Laranja||17,90|34,90
Laranja com morango||19,90|34,90
Limão||14,90|34,90
Maracujá||17,90|41,90
`
      },
      {
        titulo: 'Cervejas', alcool: true, colunas: [],
        dados: `
Baden Golden||15,90
Black Princess||10,90
Budweiser||18,90
Cerpa Export||14,90
Corona 330 ml||14,90
Corona 600 ml||21,90
Heineken||11,90
Heineken 330 ml||15,90
Serra Malte||21,90
Spaten Puro Malte 355 ml||12,90
Spaten Puro Malte 600 ml||19,90
Stella Artois||13,90
Stella Artois 330 ml||15,90
Stella Artois Pure Gold Long Neck||14,90
Stella Puro Malte 600 ml||21,90
`
      },
      {
        titulo: 'Caipirinhas e coquetéis', alcool: true, colunas: [],
        dados: `
Caipirinha de cachaça||28,90
Caipirinha com saquê||34,90
Caipirinha com vodka Absolut||34,90
Caipirinha com vodka Smirnoff||40,90
Negroni||45,90
`
      },
      {
        titulo: 'Destilados, doses e licores', alcool: true, colunas: [],
        dados: `
Aperol (dose)||28,90
Bacardí Rum||34,90
Bombay||46,90
Cachaça Saliníssima (dose)||22,90
Campari (dose)||34,90
Domecq (dose)||26,90
Licor 43 (dose)||34,90
Saquê||34,90
Velho Barreiro (dose)||29,90
Vodka Absolut||40,90
Vodka Smirnoff||34,90
Whisky Red Label (dose)||41,90
Whisky Chivas Regal (dose)||39,90
`
      },
      {
        titulo: 'Vinhos', alcool: true, colunas: [],
        dados: `
Cabeza de Piedra Cabernet Sauvignon||79,90
Cabeza de Piedra Malbec||77,90
Pata Negra||109,90
Português São Miguel||159,90
Vinho Arquiduque Douro (português)||126,90
Vinho Casa Pereira tinto seco Cabernet Sauvignon Reserva Sul do Brasil||155,90
Vinho Donatella Lambrusco||136,90
Vinho Espanhola (taça)||40,90
Vinho Família Pereira branco suave tradicional||63,90
Vinho Família Pereira tinto seco tradicional||67,90
Vinho Família Pereira tinto suave tradicional||40,90
Vinho Freixenet Chianti Italiano||205,90
Vinho Freixenet Primitivo Italiano||195,90
Vinho Ma Chérie branco suave||90,90
Vinho seco Adega Patrício 750 ml||45,90
Vinho São Miguel do Sul (português)||126,90
Vinho Sig Joseph tinto seco italiano Merlot/Sangiovese – Toscana||103,90
Vinho suave Adega Patrício 750 ml||45,90
`
      }
    ]
  },
  {
    id: 'sobremesas', curto: 'Sobremesas', titulo: 'Sobremesas',
    grupos: [{
      colunas: [],
      nota: '* Disponível somente para delivery.',
      dados: `
Cone de Chocolate||11,90
Cocada Supreme|Com sorvete de creme e calda de doce de leite|45,90
Pudim de Leite Condensado||11,90
Petit Gâteau*|Com sorvete de creme|28,90
Trufas||5,90
`
    }]
  }
];