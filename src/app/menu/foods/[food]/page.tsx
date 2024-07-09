interface Props {
  params: {
    food: string
  }
}

export default function FoodByPage({ params }: Props) {
  const { food } = params

  return <div>FoodByPage - {food}</div>
}
