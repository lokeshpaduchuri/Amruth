export function cloudinary(src: string, width: number) {
  return `https://res.cloudinary.com/demo/image/upload/c_scale,w_${width}/${src}`;
}
