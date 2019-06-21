export interface NgxToastConfig {
  /**
   * Toast ID. This will be generated automatically if not provided.
   */
  id?: number;
  /**
   * Message to display in the toast.
   */
  message: string;
  /**
   * Toast type. This will determine which styles to use.
   */
  type: "success" | "error" | "warning" | "info";
  /**
   * Specifies if the toast can be closed by pressing the close button.
   */
  canBeClosed?: boolean;
  /**
   * Time that the toast will be shown before disappearing.
   * Defaults to 5000ms.
   */
  timeout?: number;
}
