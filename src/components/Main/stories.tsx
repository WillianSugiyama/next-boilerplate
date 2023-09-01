import { Meta, StoryFn } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title Default',
    description: 'Description Default'
  }
} as Meta

export const Basic: StoryFn = (args) => <Main {...args} />

export const Default: StoryFn = (args) => <Main {...args} />
Default.args = {
  title: 'Teste',
  description: '123'
}
