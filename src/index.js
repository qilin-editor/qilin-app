import './styles/template.scss';
import './scripts/bootstrap';

if (process.env.NODE_ENV === 'development') {
  console.info('Development mode enabled');

  require('nw-dev');
}
