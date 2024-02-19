import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Пользователям',
    emoji: '🤳',
    bName: '💁‍♂️ ЧАВО',
    bLink: '/general/faq',
    b2Name: '⚖️ Правила',
    b2Link: '/general/rules',
    description: (
      <>
        Если ты посещаешь этот сайт как обычный пользователь, тебе лучше ознакомиться с другими страницами из списка ниже. Там ты сможешь найти развёрнутые ответы на вопросы что это такое, зачем нужно, как использовать и как использовать не нужно.
      </>
    ),
  },
  {
    title: 'Администраторам',
    emoji: '👨‍💻',
    bName: '🗄 API',
    bLink: '/admins/api',
    b2Name: '⚙️ Скрипты',
    b2Link: '/admins/category/%EF%B8%8F-скрипты',
    description: (
      <>
        Если ты посещаешь этот сайт как разработчик или администратор подобных групп, тебе лучше ознакомиться со страницами из списка ниже. Там ты сможешь найти всё необходимое, что поможет тебе наладить администрирование своих групп.
      </>
    ),
  },
  {
    title: 'Поддержать',
    emoji: '💶',
    bName: '💳 Способы',
    bLink: '/donate/methods',
    b2Name: '🫰 Траты',
    b2Link: '/donate/spends',
    description: (
      <>
        Если у тебя появилось желание поддержать наш проект, то сделать ты это можешь на странице <code>💳 Способы</code>. С информацией о расходах проекта ознакомиться ты можешь на странице <code>🫰 Траты</code>.
      </>
    ),
  }
];

function Feature({title, description, bLink, bName, b2Link, b2Name, emoji}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <p style={{ fontSize: '5rem' }}>{emoji}</p>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link
            style={{ marginRight: '10px' }}
            className="button button--secondary button--lg"
            to={bLink}>
            {bName}
          </Link>
          <Link
            className="button button--secondary button--lg"
            to={b2Link}>
            {b2Name}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
