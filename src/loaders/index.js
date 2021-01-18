import SecurityLoaders from './security-loaders';
import GeneralLoaders from './general-loaders';
import { ServicesLoaders } from './services-loaders';

export default function Loaders() {
  return [SecurityLoaders, GeneralLoaders, ServicesLoaders];
}
