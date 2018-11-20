import nav from './nav';
import MakeButton from './MakeButton';
import MakeColorStyle from './MakeColorStyle';

const newButton = MakeButton({
  label: 'yowhat?',
  style: [MakeColorStyle().red, MakeColorStyle().borderRadius]
});
document.body.appendChild(newButton);
