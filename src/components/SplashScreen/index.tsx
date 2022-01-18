import { colors } from "../../constants/colors";
import { Iconly } from "../Iconly";
import { useStyles } from "./hooks/useStyles";

interface ISplashProps {
  show: boolean;
}

export const Splash: React.FC<ISplashProps> = ({ show }) => {
  const styles = useStyles();
  return show ? (
    <div className={styles.wrapper}>
      <Iconly name="Loader" color={colors.darkGreen} size="lg" />
    </div>
  ) : null;
};
