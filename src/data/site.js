export const site = {
  name: "Thiago Miranda Advogados",
  shortName: "Thiago Miranda",
  city: "Júlio Borges • PI",
  whatsapp: "5511997827623",
  whatsappFormatted: "(11) 99782-7623",
  instagram: "@adv.thiagomr",
  address: "Avenida Antônio Ribeiro - Centro, Júlio Borges - PI, 64983-000",
  hours: "Seg a Sex, das 07:30 às 19h",
  email: "contato@tmadvogados.adv.page",
  mapUrl: "https://maps.google.com/?q=Avenida+Antônio+Ribeiro+Centro+Júlio+Borges+PI",
  isDemo: false,
}

export function whatsappUrl(message = "Olá! Gostaria de tirar uma dúvida jurídica.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}