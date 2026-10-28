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
Crostini de Parmesão com Alecrim e Manjericão|Acompanha molho Don Miguelito|37,90
`
      },
      {
        titulo: 'Pizza Rolls', nota: 'Porção com 8 unidades.', colunas: [],
        dados: `
Atum|Atum em pedaços com cream cheese, alho-poró e parmesão|59,90
Calabresa Moída com Mussarela|Calabresa moída com mussarela, parmesão e Catupiry|49,90
Goiabada com Catupiry|Goiabada com Catupiry|49,90
Queijo Brie com Mel|Queijo brie com mel|59,90
Romeu e Julieta|Goiabada com mussarela|54,90
`
      }
    ]
  },
  {
    id: 'calzones', curto: 'Calzones', titulo: 'Calzones',
    grupos: [{
      colunas: [],
      dados: `
Calzone Calabresa|Calabresa, cebola roxa, cheddar e mussarela|69,90
Calzone Dois Queijos|Dois queijos|59,90
Calzone Frango|Frango, Catupiry, milho, mussarela e bacon|73,90
Calzone Quatro Queijos|Mussarela, Catupiry, provolone e gorgonzola|79,90
Calzone Vegetariana|Milho, palmito, ervilha, brócolis, tomate-cereja e mussarela|69,90
`
    }]
  },
  {
    id: 'pizzas-salgadas', curto: 'Pizzas salgadas', titulo: 'Pizzas salgadas',
    intro: 'Todas em dois tamanhos: broto e grande. Alguns sabores existem só no broto.',
    grupos: [{
      colunas: ['Broto', 'Grande'],
      dados: `
Abobrinha (Zucchini)|Abobrinha, mussarela, parmesão e alho frito|47,90|84,90
Abobrinha do Chef|Cream Cheese e Abobrinha com Alho|55,90|81,90
Alho|Mussarela e alho frito|46,90|59,90
Amatriciana|Pancetta, cebola roxa, tomate-cereja, alecrim e parmesão|54,90|76,90
Atum|Atum e cebola roxa|39,90|92,90
Atum com Mussarela|Atum e mussarela|59,90|96,90
Bacalhau do Don Miguelito|Bacalhau com mussarela e Catupiry|89,90|
Bacon|Mussarela e bacon|52,90|63,90
Baiana|Calabresa moída, molho de pimenta, ovos, cebola roxa e mussarela|54,90|59,90
Bauru|Presunto, mussarela, orégano e tomates italianos|52,90|63,90
Brócolis|Brócolis, mussarela e alho frito|53,90|64,90
Calabresa|Calabresa fatiada e cebola roxa|34,90|49,90
Calabresa com Catupiry|Calabresa e Catupiry|39,90|64,90
Camarão do Chef|Camarão temperado no alho em lâminas e azeite, cream cheese, alho-poró e cebola roxa|81,90|141,90
Canadense|Lombo canadense, mussarela de búfala, palmito, bacon e rúcula|67,90|98,90
Caprese|Mussarela de búfala, tomate-cereja, manjericão e patê de azeitona preta|61,90|91,90
Caponata de Berinjela|Caponata de berinjela e mussarela|47,90|74,90
Carne Seca com Catupiry|Carne seca e Catupiry|62,90|98,90
Carne Seca com Mussarela|Carne seca, cebola roxa e mussarela|64,90|92,90
Catumilho|Milho e Catupiry|47,90|59,90
Cinco Queijos|Mussarela, Catupiry, gorgonzola, provolone e parmesão|76,90|103,90
Colonial|Presunto, champignon, bacon, Catupiry e parmesão|64,90|103,90
Don Alex|Cream Cheese e Pepperoni|67,60|103,90
Don Cândido|Calabresa moída, ovo, parmesão, pimenta e cebola roxa|68,90|76,90
Don Carlos Kubo|Atum, tomate em rodelas, cebola roxa, provolone e parmesão|76,90|108,90
Don Corsito|Caponata de berinjela com mussarela e gorgonzola|81,90|92,90
Don Diego|Lombo, bacon, mussarela e Catupiry|75,90|113,90
Don Fernando|Atum, pepperoni, cebola roxa e mussarela|76,90|109,90
Don Levicius|Calabresa fatiada, cebola roxa e Catupiry|64,90|67,90
Don Lucca|Champignon, Mussarela, Palmito, Catupiry e Parmesan|73,90|
Don Luigi|Mussarela, Gorgonzola, Queijo Brie e Geléia|80,00|117,90
Don Marcos|Cream cheese, salmão, cebola roxa e rúcula|89,90|139,90
Don Miguelito|Frango desfiado, parmesão e Catupiry|54,90|98,90
Don Riva|Palmito, mussarela e Catupiry|59,90|102,90
Don Roberto|Frango, mussarela e alho frito|54,90|
Don Thallito|Mussarela, frango, cheddar, bacon e Doritos|67,90|103,90
Don Zeca|Atum, cream cheese, alho-poró, parmesão e tomate seco|77,90|120,90
Dois Queijos|Mussarela e Catupiry|52,90|74,90
Donna Aline|Calabresa moída, cream cheese e parmesão|58,90|87,90
Donna Gisleni|Brócolis, gergelim, alho frito e azeite português|44,90|
Donna Jô|Mussarela, queijo brie e presunto parma|89,90|117,90
Donna Terezinha|Peito de peru, Catupiry, palmito e mussarela|62,90|98,90
Dr. Anderson Lafuza|Mussarela de búfala, presunto, tomate e orégano|59,90|90,90
Escarola|Escarola refogada, mussarela e bacon|46,90|70,90
Frango com Catupiry|Frango e Catupiry|46,90|64,90
Frango com Cheddar e Bacon|Frango, cheddar e bacon|59,90|88,90
Frango do Chef Amós|Frango, bacon e mussarela|59,90|77,90
Italiana|Escarola refogada, calabresa moída, palmito, cebola roxa e mussarela|56,90|81,90
Lombo com Abacaxi|Lombo canadense, mussarela, Catupiry e abacaxi|70,90|108,90
Marguerita|Mussarela, parmesão, tomate em rodelas e manjericão|50,90|69,90
Marguerita do Chef Amós|Mussarela de búfala, tomate-cereja e manjericão|55,90|80,90
Mussarela|Mussarela (no broto, também com azeitona)|42,90|54,90
Mussarela de Búfala|Mussarela de búfala|46,90|
Napolitana do Chef Amós|Alho fresco, azeite português, parmesão e manjericão|50,90|74,90
Palmito com Catupiry|Palmito e Catupiry|67,90|98,90
Palmito com Mussarela|Palmito e mussarela|70,90|97,90
Pepperoni|Mussarela, pepperoni e parmesão|71,90|104,90
Pepperoni com Catupiry|Pepperoni e Catupiry|70,90|102,90
Portuguesa|Presunto, ovo, ervilha fresca, cebola roxa e mussarela|50,90|69,90
Primavera|Palmito, bacon, milho e mussarela|68,90|100,90
Quatro Queijos|Mussarela, Catupiry, gorgonzola e provolone|63,90|92,90
Romana Aliche|Mussarela, aliche e tomate|73,90|108,90
Rúcula|Mussarela de búfala, rúcula e tomate seco|50,90|74,90
Salmão com Camarão|Cream cheese, alho-poró, salmão, camarão, cebola roxa e rúcula|89,90|161,90
Siciliana|Champignon, bacon e Catupiry|70,99|103,90
Toscana|Calabresa e mussarela|50,90|63,90
Três Queijos|Mussarela, Catupiry e parmesão|57,90|84,90
Vegetariana|Brócolis, palmito, ervilha fresca, milho, tomate-cereja e mussarela|54,90|80,90
`
    }]
  },
  {
    id: 'bordas', curto: 'Bordas e adicionais', titulo: 'Bordas e adicionais',
    intro: 'Capriche na borda ou turbine o sabor com um adicional.',
    grupos: [
      {
        titulo: 'Bordas das pizzas salgadas', colunas: ['Broto', 'Grande'],
        dados: `
Borda Catupiry e Cheddar|||20,00
Borda de Chocolate||15,00|20,00
Borda de Gergelim||5,90|7,90
Borda Mussarela||25,00|25,00
Borda Vulcão (Catupiry, Cheddar e Mussarela)||30,00|45,00
`
      },
      {
        titulo: 'Adicionais', colunas: ['Broto', 'Grande'],
        dados: `
Alho frito|||10,00
Bacon|||15,00
Calabresa|||15,00
Camarão|||40,00
Catupiry||10,00|20,00
Cebola roxa|||10,00
Cheddar||12,00|20,00
Gorgonzola|||20,00
Massa|||10,00
Milho|||10,00
Molho de tomate|||10,00
Mussarela|||20,00
Palmito|||25,00
Parmesão|||20,00
Pepperoni|||25,00
Queijo brie|||25,00
Tomate italiano|||10,00
`
      },
      {
        titulo: 'Bordas das pizzas doces', nota: 'Escolha 1 opção de borda.', colunas: ['Broto', 'Grande'],
        dados: `
Borda de Chocolate||15,00|20,00
Borda de Gergelim||6,00|6,00
Borda Mussarela||25,00|25,00
Borda Vulcão (Catupiry, Cheddar e Mussarela)||30,00|30,00
Borda Vulcão de Chocolate||20,00|40,00
`
      }
    ]
  },
  {
    id: 'pizzas-doces', curto: 'Pizzas doces', titulo: 'Pizzas doces',
    intro: 'Também em broto e grande.',
    grupos: [{
      colunas: ['Broto', 'Grande'],
      dados: `
Abacaxi|Doce de leite, abacaxi e canela|49,90|65,90
Banana|Banana, leite condensado e canela em pó|43,90|49,90
Banana Nevada|Creme de leite, banana, canela e chocolate branco|49,90|65,90
Banoffee|Banana flambada com canela, chocolate branco e doce de leite|54,90|76,90
Benjamim Duo|Chocolate ao leite, chocolate preto e Negresco|49,90|65,90
Brigadeiro|Chocolate com cobertura de granulado|43,90|58,90
Chocolate ao Leite|Chocolate ao leite|43,90|54,90
Chocolate Branco com Frutas Vermelhas|Chocolate branco com frutas vermelhas|49,90|65,90
Chocolate com Uva|Chocolate com uva|52,90|61,90
Cream Cheese com Frutas Vermelhas|Cream cheese com frutas vermelhas|54,90|65,90
Doce de Leite com Uva|Doce de leite com uva||65,90
Kit Kat|Chocolate e Kit Kat em pedaços|48,90|63,90
Lucy|Doce de leite e coco|49,90|64,90
Miguelito|Chocolate e M&M's|65,90|76,90
Mussarela com Doce de Leite|Mussarela com doce de leite|60,90|70,90
Nutella com Morango|Nutella e morango|60,90|75,90
Prestígio|Chocolate ao leite e coco ralado fresco|54,90|65,90
Romeu & Julieta com Catupiry|Goiabada e Catupiry|60,90|64,90
Romeu & Julieta com Mussarela|Goiabada e mussarela|39,90|64,90
Sensação|Chocolate e morango|54,90|65,90
`
    }]
  },
  {
    id: 'esfihas', curto: 'Esfihas', titulo: 'Esfihas',
    intro: 'Tamanho de 12 cm. Até 20 itens por pedido.',
    grupos: [
      {
        titulo: 'Esfihas salgadas', colunas: [],
        dados: `
2 Queijos||13,90
Abobrinha com Mussarela, Parmesão e Alho Frito||11,90
Aliche com Mussarela|Aliche com mussarela, parmesão e tomate|16,90
Atum com Cebola||13,90
Atum com Mussarela||14,90
Baiana||5,90
Bacon com Mussarela||10,90
Bauru||5,90
Berinjela com Mussarela||5,00
Brócolis com Mussarela e Alho Frito||9,90
Calabresa||5,90
Calabresa com Catupiry||9,90
Calabresa com Mussarela||8,90
Caprese||14,90
Carne||7,90
Carne com Mussarela||9,90
Carne Seca com Catupiry||13,90
Carne Seca com Cebola||12,90
Carne Seca com Mussarela||12,90
Don Corsito|Caponata de berinjela com mussarela e gorgonzola|17,90
Don Thalito||17,90
Escarola com Mussarela||10,90
Frango com Catupiry||11,90
Frango com Mussarela||10,90
Mussarela||5,00
Mussarela de Búfala||12,90
Milho com Catupiry||8,90
Palmito com Catupiry||12,90
Palmito com Mussarela||13,90
Palmito, Brócolis e Mussarela||15,90
Peito de Peru com Catupiry||13,90
Pepperoni com Mussarela||14,90
Portuguesa||12,90
Quatro Queijos||17,90
Salmão com Alho-Poró e Cream Cheese||19,90
`
      },
      {
        titulo: 'Esfihas doces', colunas: [],
        dados: `
Banana com Leite Condensado e Canela||10,90
Banana Nevada||17,90
Banoffee||19,90
Brigadeiro||13,90
Chocolate ao Leite||12,90
Chocolate ao Leite com Chocolate Branco e Oreo||15,90
Chocolate ao Leite com Uva Verde||17,90
Chocolate Branco||12,90
Chocolate Branco com Frutas Vermelhas||17,90
Chocolate Branco com Uva Verde||17,90
Chocolate com Kit Kat||16,90
Chocolate com M&M's||17,90
Chocolate com Morango||17,90
Cream Cheese com Frutas Vermelhas||18,90
Doce de Leite com Abacaxi e Canela||17,90
Doce de Leite com Coco||15,90
Doce de Leite com Chocolate ao Leite||17,90
Doce de Leite com Uva Verde||18,90
Goiabada com Catupiry||17,90
Goiabada com Mussarela||17,90
Mussarela com Doce de Leite||19,90
Nutella com Kiwi||19,90
Nutella com Morango||19,90
Prestígio||17,90
`
      }
    ]
  },
  {
    id: 'hamburgueres', curto: 'Hambúrgueres', titulo: 'Hambúrgueres',
    intro: 'Até 10 itens por pedido.',
    grupos: [{
      colunas: [],
      dados: `
Burger Caprese|Hambúrguer de 180 g, mussarela de búfala, tomate-cereja, manjericão e pesto de azeitona no pão brioche com gergelim. Acompanha fritas.|47,90
Burger de Rúcula|Hambúrguer de 120 g com pasta de alho, tomate seco e queijo prato no pão brioche com gergelim. Acompanha fritas.|44,90
Burger Don Luigi|Hambúrguer de 180 g, pesto de manjericão, mussarela, gorgonzola, queijo brie e geleia de pimenta no pão australiano. Acompanha fritas.|49,90
Burger Don Marcos|Hambúrguer de salmão de 120 g com cream cheese, alho-poró, cebola roxa e rúcula no pão australiano. Acompanha fritas.|59,90
Burger Duplo Miguelito|Dois hambúrgueres de 100 g, queijo prato, cheddar, molho Miguelito e salada no pão brioche. Acompanha fritas.|39,90
Porção de Fritas|Batata frita com cheddar e bacon.|34,90
X-Burguer Miguelito|Pão brioche com gergelim, hambúrguer de 100 g, queijo prato e fritas.|29,90
`
    }]
  },
  {
    id: 'bebidas', curto: 'Bebidas', titulo: 'Bebidas',
    grupos: [
      {
        titulo: 'Águas, refrigerantes e sodas', colunas: [],
        dados: `
Água com gás||7,90
Água Nestlé||5,00
Coca-Cola 200 ml||5,00
Coca-Cola 310 ml (lata)||9,90
Coca-Cola 600 ml Zero||14,90
Coca-Cola 1 L||17,90
Coca-Cola 2 L||19,90
Coca-Cola tradicional (garrafa de vidro 250 ml)||10,00
Coca-Cola Zero 350 ml||9,90
Coca-Cola Zero 1 L||17,90
Coca-Cola Zero 2 L||19,90
Coca-Cola Zero (garrafa de vidro 250 ml)||10,00
Guaraná Antarctica 200 ml||5,00
Guaraná Antarctica lata 350 ml||9,90
Guaraná Antarctica 1 L||15,90
Guaraná Antarctica 1,5 L||16,90
Guaraná Antarctica 2 L||18,00
Guaraná Antarctica Zero 350 ml||9,90
Guaraná Antarctica Zero 600 ml||10,00
Guaraná Antarctica Zero 1,5 L||17,00
Guaraná Antarctica Zero 2 L||17,90
H2OH!||11,90
Pink Fresh||14,90
Schweppes Citrus||9,90
Schweppes Tônica||8,90
Soda Italiana||14,90
`
      },
      {
        titulo: 'Energéticos', colunas: [],
        dados: `
Red Bull||20,00
`
      },
      {
        titulo: 'Sucos naturais', colunas: ['Copo 330 ml', 'Jarra 750 ml'],
        dados: `
Abacaxi||13,90|27,90
Laranja||14,90|30,00
Laranja com morango||16,90|30,00
Limão||12,90|30,00
Maracujá||14,90|35,90
`
      },
      {
        titulo: 'Cervejas', alcool: true, colunas: [],
        dados: `
Baden Golden||13,90
Black Princess||9,00
Budweiser||16,00
Cerpa Export||12,90
Corona 330 ml||12,90
Corona 600 ml||18,90
Heineken||10,00
Heineken 330 ml||13,90
Serra Malte||18,90
Spaten Puro Malte 355 ml||11,00
Spaten Puro Malte 600 ml||16,90
Stella Artois||12,00
Stella Artois 330 ml||13,90
Stella Artois Pure Gold Long Neck||12,90
Stella Puro Malte 600 ml||18,90
`
      },
      {
        titulo: 'Caipirinhas e coquetéis', alcool: true, colunas: [],
        dados: `
Caipirinha de cachaça||Consulte
Caipirinha com saquê||Consulte
Caipirinha com vodka||Consulte
Negroni||39,90
`
      },
      {
        titulo: 'Destilados, doses e licores', alcool: true, colunas: [],
        dados: `
Aperol (dose)||24,90
Bacardí Rum||29,90
Bombay||40,00
Cachaça Saliníssima (dose)||19,90
Campari (dose)||29,90
Domecq (dose)||22,90
Licor 43 (dose)||30,00
Saquê||29,90
Velho Barreiro (dose)||25,90
Vodka Absolut||34,90
Vodka Smirnoff||29,90
Whisky Red Label (dose)||35,90
`
      },
      {
        titulo: 'Vinhos', alcool: true, colunas: [],
        dados: `
Cabeza de Piedra Cabernet Sauvignon||69,00
Cabeza de Piedra Malbec||67,00
Pata Negra||94,90
Português São Miguel||139,00
Vinho Arquiduque Douro (português)||110,00
Vinho Casa Pereira tinto seco Cabernet Sauvignon Reserva Sul do Brasil||135,00
Vinho Donatella Lambrusco||119,00
Vinho Espanhola (taça)||35,00
Vinho Família Pereira branco suave tradicional||55,00
Vinho Família Pereira tinto seco tradicional||59,00
Vinho Freixenet Chianti Italiano||35,00
Vinho Freixenet Primitivo Italiano||179,00
Vinho Ma Chérie branco suave||79,00
Vinho seco Adega Patrício 750 ml||39,90
Vinho São Miguel do Sul (português)||110,00
Vinho Sig Joseph tinto seco italiano Merlot/Sangiovese – Toscana||90,00
Vinho suave Adega Patrício 750 ml||39,90
`
      }
    ]
  },
  {
    id: 'sobremesas', curto: 'Sobremesas', titulo: 'Sobremesas',
    grupos: [{
      colunas: [],
      dados: `
Cone de Chocolate||10,00
Pudim de Leite Condensado||9,90
Trufas||5,00
`
    }]
  }
];