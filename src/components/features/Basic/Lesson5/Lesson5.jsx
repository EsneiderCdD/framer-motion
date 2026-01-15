// src/components/Variants/index.jsx

import VariantStagger from './Properties/VariantStagger';
import VariantControl from './Properties/VariantControl.jsx';
import VariantCondition from './Properties/VariantCondition';
import VariantSequence from './Properties/VariantSequence';

import styles from './styles/Properties.module.css';

export default function Lesson5() {
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
