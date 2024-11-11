import { Button, ButtonProps } from "src/components"

export const FilledButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      className="bg-primary-light w-full mb-6 py-[11.5px] rounded-enormous"
      textClassname="text-white text-base font-interBold text-center"
    />
  )
}
