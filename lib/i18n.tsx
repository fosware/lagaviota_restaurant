"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "es";

type Dictionary = Record<string, string>;

const navLabelKeys: Record<string, string> = {
  "/": "nav.home",
  "/menu": "nav.menu",
  "/catering": "nav.catering",
  "/gallery": "nav.gallery",
  "/about": "nav.about",
  "/contact": "nav.contact",
  "/family-packs": "nav.familyPacks",
};

const dictionaries: Record<Language, Dictionary> = {
  en: {
    "brand.category": "Mexican & Central American Food",
    "language.label": "Language",
    "language.en": "EN",
    "language.es": "ES",

    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.catering": "Catering",
    "nav.gallery": "Gallery",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.familyPacks": "Family Packs",

    "cta.call": "Call",
    "cta.callNow": "Call Now",
    "cta.callToOrder": "Call to Order",
    "cta.callForCatering": "Call for Catering",
    "cta.callToPreOrder": "Call to Pre-Order Carryout",
    "cta.orderOnline": "Order for Pickup",
    "cta.viewMenu": "View Menu",
    "cta.viewFullMenu": "View Full Menu",
    "cta.getDirections": "Get Directions",
    "cta.planEventMeal": "Plan Food for Your Gathering",
    "cta.askPartyPackages": "Ask About Party Packages",
    "cta.backToMenu": "Back to menu",
    "cta.openCarta": "Open the carta",
    "cta.orderPickup": "Order pickup",
    "cta.askByPhone": "Ask by phone",
    "cta.quickActions": "Quick actions",
    "cta.primaryNav": "Primary navigation",
    "cta.mobileNav": "Mobile navigation",
    "cta.closeMobileNav": "Close mobile navigation",
    "cta.openMobileNav": "Open mobile navigation",
    "cta.skipToContent": "Skip to content",

    "hours.short": "Daily 9 am-7 pm",
    "hours.full": "Monday-Sunday, 9:00 am-7:00 pm",
    "hours.days": "Monday-Sunday",
    "hours.time": "9:00 am-7:00 pm",

    "hero.badge": "Mexican & Central American food",
    "hero.title": "Mexican and Central American food in Denver.",
    "hero.description":
      "A local, family-operated spot on South Quebec with tacos, pupusas, mariscos, breakfast plates, salsa bar favorites, carryout and food made for a hungry table.",
    "hero.callEyebrow": "Call to order",
    "hero.menuNote": "17 categories with prices",
    "hero.orderNote": "Tell us what to cook",
    "hero.location": "South Quebec, Denver",
    "hero.cateringByPhone": "Catering by phone",
    "hero.tacosFrom": "Tacos from $1.89",
    "hero.tostadas": "Tostadas $3.99",
    "hero.pupusas": "Pupusas $2.99",
    "hero.sevenSeas": "7 Mares $18.39",
    "hero.plates": "Fajitas & plates",

    "quick.menu.title": "Full Menu",
    "quick.menu.copy": "Tacos, pupusas, mariscos, breakfast, tortas and prices.",
    "quick.online.title": "Order Pickup",
    "quick.online.copy": "Tell us what you are craving and when you want to pick it up.",
    "quick.catering.title": "Food for Gatherings",
    "quick.catering.copy": "Party trays and warm food for birthdays, graduations and family tables.",
    "quick.directions.title": "Get Directions",
    "quick.directions.copy": "Find La Gaviota at 2280 S Quebec in Denver.",
    "quick.directions.label": "Open Google Maps",

    "menuHighlights.eyebrow": "From the menu",
    "menuHighlights.title": "A long carta, organized around every craving.",
    "menuHighlights.description":
      "Tacos, pupusas, tortas, mariscos, plates, breakfast, postres and drinks now have a real place to live.",

    "catering.eyebrow": "Food for gatherings",
    "catering.title": "Bring the party. We will bring the food.",
    "catering.description":
      "La Gaviota prepares Mexican and Central American dishes for parties, anniversaries, graduations, birthdays and special occasions. Call and ask about catering or party packages.",
    "catering.phoneDetails": "Call us and we will help you plan the right amount:",
    "catering.occasion.family": "Family gatherings",
    "catering.occasion.birthdays": "Birthdays",
    "catering.occasion.graduations": "Graduations",
    "catering.occasion.anniversaries": "Anniversaries",
    "catering.occasion.special": "Special occasions",

    "carryout.eyebrow": "Call ahead",
    "carryout.title": "Call ahead. Pick up. Enjoy at home.",
    "carryout.description":
      "Craving tacos, pupusas, tamales or a full plate from La Gaviota? Call us to pre-order your carryout and enjoy fresh food wherever the day takes you.",
    "carryout.dine": "Dine in or carryout",
    "carryout.salsa": "Fresh salsa bar",
    "carryout.drinks": "Micheladas and cold drinks",
    "carryout.game": "A casual place to watch the game",
    "carryout.findUs": "Find us at",

    "about.eyebrow": "A local family restaurant",
    "about.title": "A Denver spot for real cravings, family meals and celebrations.",
    "about.description":
      "La Gaviota serves Denver with fresh ingredients, family recipes and a menu rooted in Mexican and Central American food, from quick tacos and pupusas to party catering.",
    "about.local": "Locally owned and family-operated",
    "about.recipes": "Fresh ingredients and family recipes",
    "about.dine": "Dine-in and carryout",
    "about.salsa": "Salsa bar, micheladas and a casual dining room",
    "about.experience": "More than 15 years of local restaurant and catering experience",

    "gallery.eyebrow": "Gallery",
    "gallery.homeTitle": "A table full of color, salsa and real menu favorites.",
    "gallery.homeDescription":
      "Real La Gaviota photos, paired with the dishes people come looking for.",
    "gallery.pageTitle": "Real dishes from the La Gaviota menu.",
    "gallery.pageDescription":
      "Tortas, pupusas, mariscos, breakfast plates, burritos, sopes and salsa bar favorites from the restaurant's own photo library.",
    "gallery.hungry": "Hungry now?",
    "gallery.callAhead": "Call ahead for carryout.",
    "gallery.chooseCraving": "Choose the craving, then give us a call so we can start cooking.",
    "gallery.freshKitchen": "Fresh from the kitchen",
    "gallery.featuredCaption": "Fresh, colorful and ready to share",
    "gallery.served": "Served at La Gaviota",

    "contact.eyebrow": "Visit, call or map it",
    "contact.title": "South Quebec, Denver. One tap to call, one tap to arrive.",
    "contact.description":
      "Use the live Google map for directions, call for carryout, or ask about catering and party packages.",
    "contact.cardTitle": "Contact Us",
    "contact.hoursTitle": "Business Hours",
    "contact.hoursNote": "Call ahead for carryout, catering questions and party packages.",
    "contact.mapLabel": "Live Google Map",

    "cateringForm.title": "Plan Catering by Phone",
    "cateringForm.description":
      "Tell La Gaviota about your gathering, guest count and favorite dishes. We will help you shape the food around your table.",
    "cateringForm.goodToKnow": "Good to know",
    "cateringForm.goodCopy":
      "Event date, number of guests and whether you need family-style food, party trays or a custom mix.",
    "cateringForm.askAbout": "Ask about",
    "cateringForm.askCopy":
      "Catering for birthdays, graduations, family gatherings, anniversaries and special occasions.",

    "family.eyebrow": "Family Packs / Party Packages",
    "family.title": "Food for the table, the family or the party.",
    "family.description":
      "Call La Gaviota and we will help match the food to the size of your family meal, birthday or gathering.",
    "family.meals": "Family meals",
    "family.mealsCopy": "Easy food for busy nights, soccer games, birthdays or weekend visits.",
    "family.phone": "Order by phone",
    "family.phoneCopy": "Ask what is available today and match the order to your gathering.",

    "faq.eyebrow": "Questions",
    "faq.title": "Carryout, catering, hours and location.",
    "faq.description":
      "The fastest way to get your food started is to call the restaurant directly.",

    "menuPage.eyebrow": "Menu",
    "menuPage.title": "The full La Gaviota menu, no longer buried.",
    "menuPage.description":
      "A big Denver carta with tacos, burritos, breakfast plates, mariscos, pupusas, sopes, tortas, tostadas, postres and drinks. Prices shown come from the current La Gaviota menu page.",
    "menuPage.categories": "menu categories",
    "menuPage.items": "listed items",
    "menuPage.tacosFrom": "tacos from",
    "menuPage.startTacos": "Start with tacos",
    "menuPage.startTacosCopy": "Tacos asada, adobada, barbacoa, lengua, pescado and more.",
    "menuPage.jumpTacos": "Jump to tacos",
    "menuPage.feeding": "Feeding more people?",
    "menuPage.feedingCopy": "Ordering for a group? Call us and we will help you choose enough food for everyone.",
    "menuPage.askCatering": "Ask about catering",
    "menuPage.findQuebec": "Find us on South Quebec",
    "menuPage.findQuebecCopy": "Open daily, 9 am-7 pm, with dine-in and carryout.",
    "menuPage.choose": "Choose your craving",
    "menuPage.chooseCopy": "Jump to tacos, mariscos, pupusas, tortas, breakfast, drinks and more.",
    "menuPage.quickNote": "Quick note",
    "menuPage.quickNoteCopy":
      "Prices are listed to help you choose. Give us a call before a large order or party meal so we can make sure everything is ready for you.",
    "menuCategory.back": "Back to menu",
    "menuCategory.options": "options",

    "orderPage.eyebrow": "Pickup",
    "orderPage.title": "What can we make for you?",
    "orderPage.description":
      "Add your tacos, pupusas, tortas, seafood or plates, choose a pickup time, and leave your phone number so La Gaviota can confirm.",
    "orderPage.formTitle": "Your pickup order",
    "orderPage.formDescription": "Add the dishes you want and any salsa, side or special notes for the kitchen.",
    "orderPage.name": "Your name",
    "orderPage.namePlaceholder": "Name for the order",
    "orderPage.phone": "Phone number",
    "orderPage.phonePlaceholder": "Best number to reach you",
    "orderPage.pickupTime": "Pickup time",
    "orderPage.pickupAsap": "As soon as possible",
    "orderPage.pickup15": "In about 15 minutes",
    "orderPage.pickup30": "In about 30 minutes",
    "orderPage.pickup45": "In about 45 minutes",
    "orderPage.pickup60": "In about 1 hour",
    "orderPage.items": "What would you like?",
    "orderPage.itemsPlaceholder": "Example: 3 tacos asada, 2 pupusas, 1 agua fresca...",
    "orderPage.notes": "Notes",
    "orderPage.notesPlaceholder": "Salsas, sides, allergies or special requests",
    "orderPage.popular": "Popular picks",
    "orderPage.add": "Add",
    "orderPage.submit": "Send my order",
    "orderPage.callToConfirm": "Call to confirm",
    "orderPage.emailRestaurant": "Email the restaurant",
    "orderPage.noticeTitle": "One quick thing",
    "orderPage.noticeCopy":
      "For the fastest answer, call after sending your order. La Gaviota is open daily from 9 am to 7 pm.",
    "orderPage.successTitle": "We have your order written out.",
    "orderPage.successCopy":
      "Your order is ready to send. After sending it, call La Gaviota so the kitchen can confirm your pickup time.",
    "orderPage.mailSubject": "Pickup order",
    "orderPage.mailIntro": "Hi La Gaviota, I would like to place this pickup order.",
    "orderPage.required": "Add your name, phone number and what you would like to order.",

    "footer.copy":
      "Authentic Mexican and Central American food, carryout and catering for Denver families, friends and celebrations.",
    "footer.pages": "Pages",
    "footer.contact": "Contact",
    "footer.bottom": "Call us for pickup, catering and party meals.",
  },
  es: {
    "brand.category": "Comida mexicana y centroamericana",
    "language.label": "Idioma",
    "language.en": "EN",
    "language.es": "ES",

    "nav.home": "Inicio",
    "nav.menu": "Menú",
    "nav.catering": "Catering",
    "nav.gallery": "Galería",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.familyPacks": "Paquetes Familiares",

    "cta.call": "Llamar",
    "cta.callNow": "Llamar ahora",
    "cta.callToOrder": "Llamar para ordenar",
    "cta.callForCatering": "Llamar para catering",
    "cta.callToPreOrder": "Ordenar por teléfono",
    "cta.orderOnline": "Ordenar para recoger",
    "cta.viewMenu": "Ver menú",
    "cta.viewFullMenu": "Ver menú completo",
    "cta.getDirections": "Cómo llegar",
    "cta.planEventMeal": "Planear comida para compartir",
    "cta.askPartyPackages": "Preguntar por paquetes",
    "cta.backToMenu": "Volver al menú",
    "cta.openCarta": "Abrir la carta",
    "cta.orderPickup": "Ordenar para recoger",
    "cta.askByPhone": "Preguntar por teléfono",
    "cta.quickActions": "Acciones rápidas",
    "cta.primaryNav": "Navegación principal",
    "cta.mobileNav": "Navegación móvil",
    "cta.closeMobileNav": "Cerrar navegación móvil",
    "cta.openMobileNav": "Abrir navegación móvil",
    "cta.skipToContent": "Saltar al contenido",

    "hours.short": "Todos los días 9 am-7 pm",
    "hours.full": "Lunes a domingo, 9:00 am-7:00 pm",
    "hours.days": "Lunes a domingo",
    "hours.time": "9:00 am-7:00 pm",

    "hero.badge": "Comida mexicana y centroamericana",
    "hero.title": "Comida mexicana y centroamericana en Denver.",
    "hero.description":
      "Un restaurante local y familiar en South Quebec con tacos, pupusas, mariscos, desayunos, salsa bar, comida para llevar y platillos hechos para compartir.",
    "hero.callEyebrow": "Llama para ordenar",
    "hero.menuNote": "17 categorías con precios",
    "hero.orderNote": "Dinos qué se te antoja",
    "hero.location": "South Quebec, Denver",
    "hero.cateringByPhone": "Catering por teléfono",
    "hero.tacosFrom": "Tacos desde $1.89",
    "hero.tostadas": "Tostadas $3.99",
    "hero.pupusas": "Pupusas $2.99",
    "hero.sevenSeas": "7 Mares $18.39",
    "hero.plates": "Fajitas y platillos",

    "quick.menu.title": "Menú completo",
    "quick.menu.copy": "Tacos, pupusas, mariscos, desayunos, tortas y precios.",
    "quick.online.title": "Ordenar para recoger",
    "quick.online.copy": "Dinos qué se te antoja y a qué hora quieres recoger.",
    "quick.catering.title": "Comida para reuniones",
    "quick.catering.copy": "Charolas y comida caliente para cumpleaños, graduaciones y mesas familiares.",
    "quick.directions.title": "Cómo llegar",
    "quick.directions.copy": "Encuentra La Gaviota en 2280 S Quebec, Denver.",
    "quick.directions.label": "Abrir Google Maps",

    "menuHighlights.eyebrow": "De la carta",
    "menuHighlights.title": "Una carta amplia, organizada para encontrar el antojo rápido.",
    "menuHighlights.description":
      "Tacos, pupusas, tortas, mariscos, platillos, desayunos, postres y bebidas ahora tienen un lugar claro.",

    "catering.eyebrow": "Comida para compartir",
    "catering.title": "Trae la fiesta. Nosotros ponemos la comida.",
    "catering.description":
      "La Gaviota prepara comida mexicana y centroamericana para fiestas, aniversarios, graduaciones, cumpleaños y ocasiones especiales. Llama y pregunta por catering o paquetes para eventos.",
    "catering.phoneDetails": "Llámanos y te ayudamos a calcular la comida:",
    "catering.occasion.family": "Reuniones familiares",
    "catering.occasion.birthdays": "Cumpleaños",
    "catering.occasion.graduations": "Graduaciones",
    "catering.occasion.anniversaries": "Aniversarios",
    "catering.occasion.special": "Ocasiones especiales",

    "carryout.eyebrow": "Llama con anticipación",
    "carryout.title": "Llama. Recoge. Disfruta en casa.",
    "carryout.description":
      "¿Se te antojaron tacos, pupusas, tamales o un platillo completo? Llámanos para preparar tu orden para llevar.",
    "carryout.dine": "Come aquí o pide para llevar",
    "carryout.salsa": "Salsa bar fresco",
    "carryout.drinks": "Micheladas y bebidas frías",
    "carryout.game": "Un lugar casual para ver el partido",
    "carryout.findUs": "Encuéntranos en",

    "about.eyebrow": "Restaurante familiar local",
    "about.title": "Un lugar en Denver para antojos reales, comidas familiares y celebraciones.",
    "about.description":
      "La Gaviota sirve a Denver con ingredientes frescos, recetas familiares y una carta de comida mexicana y centroamericana, desde tacos y pupusas hasta catering.",
    "about.local": "Local y operado por familia",
    "about.recipes": "Ingredientes frescos y recetas familiares",
    "about.dine": "Servicio en comedor y para llevar",
    "about.salsa": "Salsa bar, micheladas y comedor casual",
    "about.experience": "Más de 15 años de experiencia local en restaurante y catering",

    "gallery.eyebrow": "Galería",
    "gallery.homeTitle": "Una mesa llena de color, salsa y favoritos reales del menú.",
    "gallery.homeDescription":
      "Fotos reales de La Gaviota, conectadas con los platillos que la gente viene buscando.",
    "gallery.pageTitle": "Platillos reales del menú de La Gaviota.",
    "gallery.pageDescription":
      "Tortas, pupusas, mariscos, desayunos, burritos, sopes y salsa bar de la biblioteca de fotos del restaurante.",
    "gallery.hungry": "¿Con hambre?",
    "gallery.callAhead": "Llama para pedir para llevar.",
    "gallery.chooseCraving": "Elige tu antojo y llámanos para empezar a prepararlo.",
    "gallery.freshKitchen": "Recién de la cocina",
    "gallery.featuredCaption": "Colorido, fresco y listo para compartir",
    "gallery.served": "Servido en La Gaviota",

    "contact.eyebrow": "Visítanos, llama o abre el mapa",
    "contact.title": "South Quebec, Denver. Un toque para llamar, un toque para llegar.",
    "contact.description":
      "Usa el mapa de Google para llegar, llama para pedir comida para llevar o pregunta por catering y paquetes.",
    "contact.cardTitle": "Contacto",
    "contact.hoursTitle": "Horario",
    "contact.hoursNote": "Llama para ordenar, preguntar por catering o paquetes para fiestas.",
    "contact.mapLabel": "Mapa de Google",

    "cateringForm.title": "Planea tu catering por teléfono",
    "cateringForm.description":
      "Cuéntale a La Gaviota sobre tu reunión, número de invitados y platillos favoritos. Te ayudamos a armar comida para tu mesa.",
    "cateringForm.goodToKnow": "Ten a la mano",
    "cateringForm.goodCopy":
      "Fecha del evento, número de invitados y si necesitas comida familiar, charolas o una mezcla personalizada.",
    "cateringForm.askAbout": "Pregunta por",
    "cateringForm.askCopy":
      "Catering para cumpleaños, graduaciones, reuniones familiares, aniversarios y ocasiones especiales.",

    "family.eyebrow": "Paquetes familiares y para fiestas",
    "family.title": "Comida para la mesa, la familia o la fiesta.",
    "family.description":
      "Llama a La Gaviota y te ayudamos a ajustar la comida al tamaño de tu familia, cumpleaños o reunión.",
    "family.meals": "Comidas familiares",
    "family.mealsCopy": "Comida fácil para noches ocupadas, partidos, cumpleaños o visitas de fin de semana.",
    "family.phone": "Ordena por teléfono",
    "family.phoneCopy": "Pregunta qué hay disponible hoy y ajusta la orden a tu reunión.",

    "faq.eyebrow": "Preguntas",
    "faq.title": "Pedidos, catering, horario y ubicación.",
    "faq.description":
      "La forma más rápida de empezar tu comida es llamar directamente al restaurante.",

    "menuPage.eyebrow": "Menú",
    "menuPage.title": "El menú completo de La Gaviota, ahora fácil de encontrar.",
    "menuPage.description":
      "Una carta amplia en Denver con tacos, burritos, desayunos, mariscos, pupusas, sopes, tortas, tostadas, postres y bebidas. Los precios vienen del menú actual del sitio de La Gaviota.",
    "menuPage.categories": "categorías",
    "menuPage.items": "platillos listados",
    "menuPage.tacosFrom": "tacos desde",
    "menuPage.startTacos": "Empieza con tacos",
    "menuPage.startTacosCopy": "Tacos de asada, adobada, barbacoa, lengua, pescado y más.",
    "menuPage.jumpTacos": "Ir a tacos",
    "menuPage.feeding": "¿Vas a alimentar a más personas?",
    "menuPage.feedingCopy": "¿Ordenas para varias personas? Llámanos y te ayudamos a elegir suficiente comida para todos.",
    "menuPage.askCatering": "Preguntar por catering",
    "menuPage.findQuebec": "Encuéntranos en South Quebec",
    "menuPage.findQuebecCopy": "Abierto todos los días, 9 am-7 pm, con comedor y comida para llevar.",
    "menuPage.choose": "Elige tu antojo",
    "menuPage.chooseCopy": "Ve directo a tacos, mariscos, pupusas, tortas, desayunos, bebidas y más.",
    "menuPage.quickNote": "Nota rápida",
    "menuPage.quickNoteCopy":
      "Los precios te ayudan a elegir. Para órdenes grandes o comida para reuniones, llámanos y nos aseguramos de tener todo listo para ti.",
    "menuCategory.back": "Volver al menú",
    "menuCategory.options": "opciones",

    "orderPage.eyebrow": "Para recoger",
    "orderPage.title": "¿Qué se te antoja?",
    "orderPage.description":
      "Agrega tus tacos, pupusas, tortas, mariscos o platillos, elige hora para recoger y deja tu teléfono para que La Gaviota pueda confirmar.",
    "orderPage.formTitle": "Tu pedido para recoger",
    "orderPage.formDescription": "Agrega los platillos que quieres y cualquier nota de salsa, acompañamientos o detalles para la cocina.",
    "orderPage.name": "Tu nombre",
    "orderPage.namePlaceholder": "Nombre para la orden",
    "orderPage.phone": "Teléfono",
    "orderPage.phonePlaceholder": "Mejor número para llamarte",
    "orderPage.pickupTime": "Hora para recoger",
    "orderPage.pickupAsap": "Lo antes posible",
    "orderPage.pickup15": "En unos 15 minutos",
    "orderPage.pickup30": "En unos 30 minutos",
    "orderPage.pickup45": "En unos 45 minutos",
    "orderPage.pickup60": "En aproximadamente 1 hora",
    "orderPage.items": "¿Qué quieres ordenar?",
    "orderPage.itemsPlaceholder": "Ejemplo: 3 tacos asada, 2 pupusas, 1 agua fresca...",
    "orderPage.notes": "Notas",
    "orderPage.notesPlaceholder": "Salsas, acompañamientos, alergias o pedidos especiales",
    "orderPage.popular": "Favoritos",
    "orderPage.add": "Agregar",
    "orderPage.submit": "Enviar mi pedido",
    "orderPage.callToConfirm": "Llamar para confirmar",
    "orderPage.emailRestaurant": "Enviar correo",
    "orderPage.noticeTitle": "Un detalle rápido",
    "orderPage.noticeCopy":
      "Para una respuesta más rápida, llama después de enviar tu pedido. La Gaviota abre todos los días de 9 am a 7 pm.",
    "orderPage.successTitle": "Tu pedido quedó escrito.",
    "orderPage.successCopy":
      "Tu pedido queda listo para enviarse. Después de enviarlo, llama a La Gaviota para confirmar la hora de recogida.",
    "orderPage.mailSubject": "Pedido para recoger",
    "orderPage.mailIntro": "Hola La Gaviota, quiero hacer este pedido para recoger.",
    "orderPage.required": "Agrega tu nombre, teléfono y qué quieres ordenar.",

    "footer.copy":
      "Comida mexicana y centroamericana, pedidos para llevar y catering para familias, amigos y celebraciones en Denver.",
    "footer.pages": "Páginas",
    "footer.contact": "Contacto",
    "footer.bottom": "Llámanos para recoger, catering y comida para reuniones.",
  },
};

const categoryTranslations: Record<
  string,
  Partial<Record<Language, { name?: string; eyebrow?: string; description?: string }>>
> = {
  "Tacos La Gaviota": {
    es: {
      eyebrow: "Tacos de la casa",
      description: "Tacos rápidos y llenos de sabor para almuerzo, cena o comida para llevar.",
    },
  },
  Burritos: {
    es: {
      eyebrow: "Clásicos para llevar",
      description: "Burritos sencillos con guisos conocidos, fáciles de ordenar y recoger.",
    },
  },
  "Burritos Smothered": {
    es: {
      name: "Burritos Bañados",
      eyebrow: "Calientitos y llenadores",
      description: "Burritos bañados con sensación de platillo completo.",
    },
  },
  "Breakfast Burritos": {
    es: {
      name: "Burritos de Desayuno",
      eyebrow: "Para empezar el día",
      description: "Burritos de desayuno y opciones bañadas para pedir rápido.",
    },
  },
  "Platos de Desayuno": {
    es: {
      eyebrow: "Desayunos",
      description: "Huevos, chilaquiles, tamales y platos calientes de desayuno.",
    },
  },
  Plates: {
    es: {
      name: "Platillos",
      eyebrow: "Platos completos",
      description: "Platos grandes para comer aquí, compartir o llevar a casa.",
    },
  },
  Gorditas: {
    es: {
      eyebrow: "Antojitos",
      description: "Gorditas rellenas de asada, barbacoa, rajas, pollo y más.",
    },
  },
  Seafood: {
    es: {
      name: "Mariscos",
      eyebrow: "Mariscos",
      description: "Camarones, pescado, caldos, ceviche y platos de mar.",
    },
  },
  Pupusas: {
    es: {
      eyebrow: "Favoritos centroamericanos",
      description: "Pupusas para la mesa con precio fácil de recordar.",
    },
  },
  Sopes: {
    es: {
      eyebrow: "Antojitos de maíz",
      description: "Sopes con frijoles, carnes, queso y toppings clásicos.",
    },
  },
  Tortas: {
    es: {
      eyebrow: "Tortas en bolillo",
      description: "Tortas llenadoras con carnes, milanesa, pambazo y Cubana.",
    },
  },
  Tostadas: {
    es: {
      eyebrow: "Crujientes",
      description: "Tostadas con frijol, carnes y opciones de mariscos.",
    },
  },
  Combos: {
    es: {
      eyebrow: "Para llenarse",
      description: "Combos sencillos del menú actual.",
    },
  },
  Sides: {
    es: {
      name: "Acompañamientos",
      eyebrow: "Para la mesa",
      description: "Tamales, arroz, frijoles, tortillas, salsa y extras para compartir.",
    },
  },
  Extras: {
    es: {
      eyebrow: "Extras",
      description: "Carnes extra, tortillas, crema, queso y acompañamientos pequeños.",
    },
  },
  Postres: {
    es: {
      eyebrow: "Algo dulce",
      description: "Postres clásicos, helado, fruta y dulces.",
    },
  },
  Drinks: {
    es: {
      name: "Bebidas",
      eyebrow: "Aguas, cerveza y café",
      description: "Aguas frescas, café, cerveza, micheladas y bebidas frías.",
    },
  },
};

const faqTranslations: Record<string, Record<Language, { question: string; answer: string }>> = {
  carryout: {
    en: {
      question: "Do you offer carryout?",
      answer: "Yes. Call 303-368-9941 to pre-order your carryout.",
    },
    es: {
      question: "¿Tienen comida para llevar?",
      answer: "Sí. Llama al 303-368-9941 para pedir tu orden para llevar.",
    },
  },
  catering: {
    en: {
      question: "Do you offer catering?",
      answer:
        "Yes. La Gaviota offers Mexican and Central American food catering for parties, anniversaries, graduations, birthdays and special occasions.",
    },
    es: {
      question: "¿Ofrecen catering?",
      answer:
        "Sí. La Gaviota ofrece catering de comida mexicana y centroamericana para fiestas, aniversarios, graduaciones, cumpleaños y ocasiones especiales.",
    },
  },
  cateringOrder: {
    en: {
      question: "How do I order catering?",
      answer: "Call 303-368-9941 and ask about catering or party packages.",
    },
    es: {
      question: "¿Cómo pido catering?",
      answer: "Llama al 303-368-9941 y pregunta por catering o paquetes para fiestas.",
    },
  },
  menu: {
    en: {
      question: "What kind of food is on the menu?",
      answer:
        "The menu includes tacos, burritos, breakfast plates, gorditas, seafood, pupusas, sopes, tortas, tostadas, sides, desserts and drinks, with prices shown from the existing La Gaviota menu.",
    },
    es: {
      question: "¿Qué tipo de comida hay en el menú?",
      answer:
        "El menú incluye tacos, burritos, desayunos, gorditas, mariscos, pupusas, sopes, tortas, tostadas, acompañamientos, postres y bebidas, con precios del menú existente de La Gaviota.",
    },
  },
  location: {
    en: {
      question: "Where are you located?",
      answer: "La Gaviota Mexican Restaurant is located at 2280 S Quebec, Denver, CO 80231.",
    },
    es: {
      question: "¿Dónde están ubicados?",
      answer: "La Gaviota Mexican Restaurant está en 2280 S Quebec, Denver, CO 80231.",
    },
  },
  hours: {
    en: {
      question: "What are your business hours?",
      answer: "Monday through Sunday, 9:00 am to 7:00 pm.",
    },
    es: {
      question: "¿Cuál es el horario?",
      answer: "Lunes a domingo, 9:00 am a 7:00 pm.",
    },
  },
  dineIn: {
    en: {
      question: "Do you have dine-in?",
      answer: "Yes. Guests can dine in at the restaurant, and carryout is also available.",
    },
    es: {
      question: "¿Se puede comer en el restaurante?",
      answer: "Sí. Puedes comer en el restaurante y también pedir para llevar.",
    },
  },
  soccer: {
    en: {
      question: "Do you show soccer?",
      answer:
        "The restaurant has a casual dining room. Call ahead if you are planning to watch a specific game.",
    },
    es: {
      question: "¿Pasan partidos de fútbol?",
      answer:
        "El restaurante tiene un comedor casual. Llama antes si quieres ver un partido específico.",
    },
  },
};

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("la-gaviota-language");
    if (stored === "en" || stored === "es") {
      setLanguageState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("la-gaviota-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "en" ? "es" : "en"),
      t: (key: string) => dictionaries[language][key] ?? dictionaries.en[key] ?? key,
    }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside LanguageProvider");
  }
  return context;
}

export function getCategoryText(
  category: { name: string; eyebrow?: string; description: string },
  language: Language,
) {
  const translation = categoryTranslations[category.name]?.[language];
  return {
    name: translation?.name ?? category.name,
    eyebrow: translation?.eyebrow ?? category.eyebrow,
    description: translation?.description ?? category.description,
  };
}

export function getFaqs(language: Language) {
  return Object.values(faqTranslations).map((entry) => entry[language]);
}

export function navLabelForHref(href: string, t: (key: string) => string) {
  return t(navLabelKeys[href] ?? "nav.home");
}
