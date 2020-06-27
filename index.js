export function shadowizard(options) {
  let images = document.querySelectorAll('.shadowizard');

  if (options.shadow_type === 'hard') {
    options.shadow_type = '0px';
  } else {
    options.shadow_type = '15px';
  }

  images.forEach(image => {
    image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

    if (options.padding) {
      images.style.padding = '1em';
    }
  })

}



// Do not export the function
function somePrivateFunction() {
  // ...
}

// Export default function
export function sayHello() {
  console.log('Hello');
}

// Export non-default function
export function sayGoodbye() {
  console.log('Goodbye');
}

// Export simple value
export const apiUrl = '...';

// Export object
export const settings = {
  debug: true
}