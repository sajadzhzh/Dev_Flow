export function ValidateEmail(email: string) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return false;
  }

  return true;
}

export function ValidatePassword(password: string) {
  const passPattern = /^.{8,50}$/;

  if (!passPattern.test(password)) {
    return false;
  }

  return true;
}
