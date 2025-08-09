import { readable } from 'svelte/store';
import data from '../../data/skills.json';

export type Skill = {
  id: string; name: string; level?: number; summary?: string;
  subskills?: { name: string; level?: number }[];
  examples?: { title: string; link: string }[];
};
export type Category = { id: string; name: string; color?: string; nodes: Skill[] };

export const skillsData = readable<{ categories: Category[] }>(data);

export function findCategory(id: string, d = data) {
  return d.categories.find((c: Category) => c.id === id);
}
export function findSkill(skillId: string, d = data) {
  for (const c of d.categories) {
    const m = c.nodes.find((n) => n.id === skillId);
    if (m) return { category: c, skill: m };
  }
  return null;
}
