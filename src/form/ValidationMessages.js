export const GetMessages = (input) => {
  const messages = [];
  if (input.validity.valueMissing) {
    messages.push('Value required');
  }
  if(input.validity.typeMismatch) {
    messages.push(`Invalid ${input.type}`)
  }
  return messages;
}