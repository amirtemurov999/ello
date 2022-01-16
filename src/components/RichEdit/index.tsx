import { useCallback, useRef, useState } from "react";
import { Dropdown } from "../Dropdown";
import { RichButton } from "./components/Button";
import { useStyles } from "./hooks/useStyles";
interface IRichProps {}

export const RichEdit: React.FC<IRichProps> = ({}) => {
  const styles = useStyles();
  const editor = useRef<HTMLDivElement>(null);
  const [states, setStates] = useState<{ [key: string]: boolean }>({
    bold: false,
    underline: false,
    overline: false,
    backColor: false,
    italic: false,
    strikeThrough: false,
  });
  const executeCommand = useCallback((command: string) => {
    document.execCommand(command, false, "ads");
    detectStyles();
  }, []);
  const insertHeading = useCallback(() => {
    
  },[])
  const detectStyles = useCallback(() => {
    Object.keys(states).map((key) => {
      states[key] = document.queryCommandState(key);
      setStates(() => {
        return { ...states, key: states[key] };
      });
    });
    editor.current?.focus();
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <RichButton iconName="TextColor" />

        <div className={styles.splitter} />

        <RichButton
          toggle={states["bold"]}
          iconName="Bold"
          command="bold"
          onClick={(command) => executeCommand(command)}
        />
        <RichButton
          iconName="Italic"
          command="italic"
          toggle={states["italic"]}
          onClick={(command) => executeCommand(command)}
        />
        <RichButton
          iconName="Underline"
          command="underline"
          toggle={states["underline"]}
          onClick={(command) => executeCommand(command)}
        />
        <RichButton
          iconName="Overline"
          command="strikeThrough"
          toggle={states["strikeThrough"]}
          onClick={(command) => executeCommand(command)}
        />
        <div className={styles.splitter} />
        <Dropdown
          items={[
            "Heading 1",
            "Heading 2",
            "Heading 3",
            "Heading 4",
            "Heading 5",
            "Heading 6",
          ]}
          bordered={false}
          icon={{ icon: "Heading", size: "sm" }}
          renderItem={()}
        />
        <div className={styles.splitter} />
        <RichButton iconName="Ordered" />
        <RichButton iconName="Unordered" />
        <RichButton iconName="Quote" />
        <div className={styles.splitter} />
        <RichButton iconName="Code" />
        <RichButton iconName="Marker" />
        <RichButton iconName="Link2" />
        <RichButton iconName="Unlink" />
        <RichButton iconName="FullScreen" />
      </div>
      <div
        onClick={() => detectStyles()}
        contentEditable="true"
        ref={editor}
        className={styles.editor}
      >
        asdawdawdawd
      </div>
    </div>
  );
};
