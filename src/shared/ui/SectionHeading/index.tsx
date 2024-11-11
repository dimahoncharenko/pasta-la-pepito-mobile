import { Text, TextProps } from "src/components"

type Props = Omit<TextProps, "className" | "style">

export const SectionHeading = (props: Props) => {
  return (
    <Text
      {...props}
      className="text-[28px] leading-[36.4px] tracking-widest font-interMedium mt-4 text-center"
    />
  )
}
