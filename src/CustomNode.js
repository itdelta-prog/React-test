import React from "react";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styles from "./CustomNode.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { BackgroundColor } from "./BackgroundColor";

export const CustomNode = (props) => {
  const { droppable, data } = props.node;
  const indent = props.depth * 20;
  const bgColor = BackgroundColor(props.depth);

  const handleToggle = (e) => {
    e.stopPropagation();
    props.onToggle(props.node.id);
  };

  return (
    <div
      className={`tree-node ${styles.root}`}
      style={{
        marginInlineStart: indent,
        display: "flex",
        marginBottom: 5 * props.depth + 10,
        width: 300 - indent - 5,
        color: "white",
      }}
    >
      <div
        className={`${styles.expandIconWrapper} ${
          props.isOpen ? styles.isOpen : ""
        }`}
      >
        {props.node.droppable && (
          <div onClick={handleToggle}>
            <ArrowRightIcon />
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          className={styles.labelGridItem}
          style={{
            borderWidth: (props.depth - 1) * 2,
            borderColor: "white",
            borderRadius: "40px",
            width: "100%",
            backgroundColor: bgColor,
          }}
        >
          <Typography variant="body2">{`${props.node.text}`}</Typography>
        </div>
        <div>
          <MoreVertIcon></MoreVertIcon>
        </div>
      </div>
    </div>
  );
};
