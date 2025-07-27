// src/components/Variants/index.jsx

import VariantStagger from './VariantStagger';
import VariantControl from './VariantControl.jsx';
import VariantCondition from './VariantCondition';
import VariantSequence from './VariantSequence';

import styles from './styles.module.css';

export default function VariantsCatalog() {
  return (
    <div className={styles.container}>
      <h4 style={{ fontSize: '2.5rem' }}>Variants</h4>

      <VariantStagger />
      <VariantControl />
      <VariantCondition />
      <VariantSequence />
    </div>
  );
}
