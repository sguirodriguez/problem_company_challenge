export const truncateText = (value: string, size: number) => {
  if (value === undefined || value === "undefined" || value === "") {
    return value;
  }

  let shortText = value;
  if (value.length >= size + 3) {
    shortText = value.substring(0, size).concat("...");
  }
  return shortText;
};

export const cpfMask = (value: string) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

export const onlyNumbers = (value: string) => {
  return value.replace(/\D/g, "");
};

export const handleMoneyMask = (value: string) => {
  if (typeof value !== "string") return "Parâmetro inválido";

  let monetary = value?.replace(/\D/g, "");
  monetary = (Number(monetary) / 100).toFixed(2) + "";
  monetary = monetary.replace(".", ",");
  monetary = monetary.replace(/(\d)(\d{3})(\d{3})(\d{3}),/g, "$1.$2.$3.$4,");
  monetary = monetary.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
  monetary = monetary.replace(/(\d)(\d{3}),/g, "$1.$2,");
  return `R$ ${monetary}`;
};
