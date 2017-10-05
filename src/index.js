import './styles/template.scss';
import './scripts/bootstrap';

if (process.env.NODE_ENV === 'development') {
  console.info('Development mode enabled');

  const win = nw.Window.get();

  win.showDevTools();
  win.requestAttention(true);

  require('nw-dev');
}
