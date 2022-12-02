const inputs = document.querySelectorAll('ul li input');

function updateColor() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', updateColor));
inputs.forEach(input => input.addEventListener('mousemove', updateColor));