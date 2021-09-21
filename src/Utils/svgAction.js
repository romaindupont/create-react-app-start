
export function focusSvg () {
  const eye = document.querySelectorAll('.eye');
  const blind = document.querySelectorAll('.blind');
  const black = document.querySelectorAll('.black');
  eye.forEach(eyes => eyes.setAttribute('ry', '10'));
  blind.forEach(blinds => blinds.setAttribute('ry', '0'));
  black.forEach(blacks => blacks.setAttribute('ry', '1'));
};

export function blurSvg () {
  const eye = document.querySelectorAll('.eye');
  const blind = document.querySelectorAll('.blind');
  const black = document.querySelectorAll('.black');
  eye.forEach(eyes => eyes.setAttribute('ry', '265'));
  blind.forEach(blinds => blinds.setAttribute('ry', '258'));
  black.forEach(blacks => blacks.setAttribute('ry', '106'));
};
