import { type ClassValue, clsx } from 'clsx';
import { format } from 'date-fns';
import { hu } from 'date-fns/locale';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function resolveDelayed<T>(value: T, delay = 1000) {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

export function formatHu(date: string | number | Date, formatString = 'yyyy. MMMM dd. HH:mm') {
  return format(date, formatString, { locale: hu });
}
