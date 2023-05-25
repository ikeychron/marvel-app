const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export default function formattedDate(date: Date): string {
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${day} de ${month}, ${year}`;
}

