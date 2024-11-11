import { Button, ButtonProps } from "src/components"

export const OutlinedButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      className="border border-primary-light w-full mb-6 py-[11.5px] rounded-enormous"
      textClassname="text-primary-light text-base font-interBold text-center"
    />
  )
}
