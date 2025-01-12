import { MouseEventHandler } from "react";
import { Button as UIButton, IconName } from "@interchain-ui/react";

import { useChain } from "@cosmos-kit/react";
// import { useQueryCW20Balance } from "@/hooks/useQuerySmartContract";
import { ArchButton } from "../ArchButton";
import { CHAIN_NAME } from "../../config";

export type ButtonProps = {
  text?: string;
  icon?: IconName;
  loading?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

export type ConnectProps = Pick<ButtonProps, "text" | "loading" | "onClick">;

function noop() {}

export function Button({
  text,
  icon,
  loading,
  disabled,
  onClick = noop,
}: ButtonProps) {
  return (
    <UIButton
      onClick={onClick}
      leftIcon={icon}
      disabled={disabled}
      isLoading={loading}
      domAttributes={{
        style: {
          flex: 1,
          backgroundImage:
            "linear-gradient(109.6deg, rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1%)",
        },
      }}
    >
      {text}
    </UIButton>
  );
}

export const ButtonConnect = ({
  text = "Connect Wallet",
  onClick = noop,
}: ConnectProps) => (
  <Button text={text} icon="walletFilled" onClick={onClick} />
);

export const ButtonConnected = ({
  text = "My Wallet",
  onClick = noop,
}: ConnectProps) => {
  const { address, disconnect } = useChain(CHAIN_NAME);

  // const { data: cultBalance, isLoading: isCultBalanceLoading } =
  //   useQueryCW20Balance(cultContract, address);
  const cultBalance = { balance: "0" };
  const isCultBalanceLoading = false;

  return (
    <ArchButton
      text={
        isCultBalanceLoading
          ? "0 CULT"
          : `${new Intl.NumberFormat(navigator.languages, {
              maximumSignificantDigits: 1,
            }).format(
              Number(
                BigInt(cultBalance?.balance || "0") / 10_000_000_000_000_000n
              ) / 100
            )} CULT`
      }
      style="cult"
      onClick={() => disconnect()}
    />
  );
};
export const ButtonDisconnected = ({
  text = "Connect Wallet",
  onClick,
}: ConnectProps) => <ArchButton text={text} onClick={onClick} />;

export const ButtonConnecting = ({
  text = "Connecting ...",
  loading = true,
}: ConnectProps) => <ArchButton text={text} onClick={() => undefined} />;

export const ButtonRejected = ({
  text = "Connect Wallet",
  onClick = noop,
}: ConnectProps) => <ArchButton text={text} onClick={onClick} />;

export const ButtonError = ({
  text = "Change Wallet",
  onClick = noop,
}: ConnectProps) => <ArchButton text={text} onClick={onClick} />;

export const ButtonNotExist = ({
  text = "Install Wallet",
  onClick = noop,
}: ConnectProps) => (
  <Button text={text} icon="walletFilled" onClick={onClick} />
);
