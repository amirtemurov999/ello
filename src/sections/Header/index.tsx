import { Iconly } from "../../components/Iconly";
import { colors } from "../../constants/colors";
import { useStyles } from "./hooks/useStyles";
interface IHeaderProps {
  title: string;
}
export const Header: React.FC<IHeaderProps> = ({ title }) => {
  const styles = useStyles();
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSection}>
        <Iconly
          name="Google"
          color={colors.darkGreen}
          style={{ marginRight: 10 }}
        />
        <h1>{title}</h1>
      </div>
      <div className={styles.rightSection}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Iconly
            name="Search"
            color={colors.textColor}
            wrap
            bgColor={colors.background}
          />
          <Iconly
            name="Notification"
            color={colors.textColor}
            wrap
            bgColor={colors.background}
            style={{ marginLeft: 15 }}
          />
        </div>
        <img
          src="https://lh3.googleusercontent.com/a-/AOh14Gg-LW709j1soLMCvnx-TNrKIabj0C160KEwX6RAdQ=s96-c"
          className={styles.avatar}
        />
        <Iconly name="Menu" color={colors.darkSilver} />
      </div>
    </div>
  );
};
