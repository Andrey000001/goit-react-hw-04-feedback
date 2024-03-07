import { Title } from './SectionTitle.styled';
export const SectionTitle = ({ title, children }) => {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
};
