export const site = {
  name: "Almeida Advocacia & Consultoria Jurídica",
  shortName: "Almeida Advocacia",
  city: "Brasília • DF",
  whatsapp: "5589981433161",
  whatsappFormatted: "(89) 98143-3161",
  instagram: "@carlos_emanuelrf",
  address: "Trecho 2, Quadra 209, Conjunto B • Sol Nascente\nBrasília • DF",
  hours: "Seg a Sex, das 09h às 18h",
  mapUrl: "https://maps.app.goo.gl/MVf8esPkWuJESybj7",
  isDemo: true,
}

export function whatsappUrl(message = "Olá! Gostaria de tirar uma dúvida jurídica.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}