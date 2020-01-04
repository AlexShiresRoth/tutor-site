export const convertToHtml = string => {
  const textArray = string.split(/<p>|<\/p>/g)
  console.log(textArray)
  return { __html: string }
}
