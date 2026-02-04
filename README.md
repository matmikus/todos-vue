Krok 0 – Setup projektu
	•	Utwórz nowy projekt: npm init vue@latest
	•	Wybierz Vue 3, TypeScript opcjonalnie, Router i Pinia.
	•	Ustaw dev server i sprawdź, czy aplikacja działa (npm run dev).

⸻

Junior-level tasks

1️⃣ Reactive data & template syntax
	•	Utwórz komponent TodoList.vue.
	•	Dane: lista todo ([{ id: 1, title: "Learn Vue", done: false }]) z ref lub reactive.
	•	Wyświetl listę w template: v-for, v-if dla filtrowania ukończonych zadań.
	•	Dodaj możliwość oznaczenia zadania jako ukończone (v-model / checkbox).

⸻

2️⃣ Event handling & props
	•	Utwórz komponent TodoItem.vue z props todo.
	•	Emituj event toggle po kliknięciu checkboxa.
	•	W TodoList.vue odbierz event i aktualizuj stan listy.

⸻

3️⃣ Slots
	•	Dodaj slot w TodoItem np. do wstawienia przycisku „Usuń”.
	•	W TodoList.vue użyj slotu, żeby wyświetlić przycisk „Usuń”.

⸻

4️⃣ Computed & watch
	•	Oblicz ilość ukończonych / aktywnych zadań w computed.
	•	Użyj watch do logowania zmian w liście todo (np. konsola przy dodaniu/usunięciu).

⸻

5️⃣ Routing
	•	Dodaj Vue Router:
	•	/ → lista wszystkich zadań
	•	/completed → lista ukończonych zadań
	•	Użyj <router-link> i <router-view>.

⸻

Mid-level tasks

1️⃣ Composition API
	•	Przenieś logikę todo do setup().
	•	Zamiast data i methods użyj ref, reactive, computed i watchEffect.

⸻

2️⃣ Pinia Store
	•	Utwórz store useTodoStore: state: () => ({ todos: [] }),
actions: { addTodo, toggleTodo, removeTodo }
getters: { completedCount, activeCount }

	•	Podłącz do komponentów zamiast lokalnego stanu.

⸻

3️⃣ Dynamic / Async Components
	•	Stwórz komponent TodoStats.vue asynchronicznie (defineAsyncComponent) i pokaż licznik zadań.
	•	Lazy load listę ukończonych zadań w /completed route.

⸻

4️⃣ Navigation guards
	•	Dodaj prostą logikę w routerze: router.beforeEach((to, from, next) => {
  console.log('Navigating to', to.path)
  next()
})

	•	Możesz symulować np. „auth” dla /completed.

⸻

5️⃣ Forms & Validation
	•	Formularz dodawania nowego todo:
	•	Input z v-model
	•	Prosta walidacja: nie dodawaj pustego zadania
	•	Wyświetl błąd w template

⸻

6️⃣ Dev tooling / debugging
	•	Otwórz Vue DevTools
	•	Zobacz reactive state, Pinia store, komponenty, props, events.
	•	Dodaj console.log w watch / actions, żeby śledzić zmiany stanu.






Faza 2 – Vue App → Nuxt 3 Todo App (Junior + Mid)

Setup Nuxt 3
	1.	npx nuxi init nuxt-todo → TypeScript, Pinia, Vue 3, Router (domyślny).
	2.	Skopiuj kod komponentów i logikę z Vue App do components/ i stores/.
	3.	Sprawdź działanie npm install i npm run dev.

⸻

Junior-level Nuxt tasks

1️⃣ Routing w Nuxt 3
	•	Przenieś strony do /pages:
	•	/pages/index.vue → lista wszystkich todos
	•	/pages/completed.vue → lista ukończonych todos
	•	Zastąp Vue Router: użyj <NuxtLink> zamiast <router-link> i <NuxtPage> zamiast <router-view>.
	•	Upewnij się, że nawigacja działa tak samo jak w Vue SPA.

⸻

2️⃣ Server-side state / asyncData / useFetch
	•	Zamiast lokalnego store lub Pinia w onMounted, użyj useFetch w Nuxt 3:
const { data: todos } = await useFetch('/api/todos')
	•	Wyświetl dane w TodoList.vue
	•	Sprawdź, że dane są hydrated po stronie klienta (SSR działa)

⸻

3️⃣ Runtime config / env variables
	•	Dodaj plik .env:
NUXT_PUBLIC_API_BASE=https://example.com/api
	•	W komponencie / store użyj:
const config = useRuntimeConfig()
const apiUrl = config.public.API_BASE
	•	Pokaż różnicę między public (dostępne w frontendzie) a private (tylko backend SSR)

⸻

4️⃣ Middleware / navigation guards
	•	Stwórz plik middleware/auth.ts:
export default defineNuxtRouteMiddleware((to, from) => {
  const loggedIn = false // symulacja
  if (to.path === '/completed' && !loggedIn) return navigateTo('/')
})
	•	Podłącz middleware do /completed strony
	•	Test: jeśli loggedIn = false → przekierowanie na /

⸻

Mid-level Nuxt tasks

1️⃣ Composables
	•	Stwórz composables/useTodos.ts:
import { ref, computed } from 'vue'

export const todos = ref([])

export function useTodos() {
  const completedTodos = computed(() => todos.value.filter(t => t.done))
  const addTodo = (title: string) => todos.value.push({ title, done: false })
  const toggleTodo = (index: number) => todos.value[index].done = !todos.value[index].done)
  return { todos, completedTodos, addTodo, toggleTodo }
}
	•	Użyj w komponentach zamiast lokalnego stanu

⸻

2️⃣ Dynamic / Async Components
	•	Lazy-load TodoStats.vue:
import { defineAsyncComponent } from 'vue'
const TodoStats = defineAsyncComponent(() => import('~/components/TodoStats.vue'))
	•	Użyj go na / stronie lub /completed route

⸻

3️⃣ Pinia + SSR
	•	Przenieś store Vue App do Nuxt Pinia (w stores/todo.ts)
	•	Sprawdź hydratację: po SSR / reload wszystkie dane w store są zachowane
	•	Test: DevTools → sprawdź Pinia store po stronie klienta

⸻

4️⃣ DevTools / debugging
	•	Vue DevTools → komponenty Nuxt, composables, Pinia stores
	•	Sprawdź reactive state, getters, actions, watch
	•	Debug useFetch i lazy-loaded komponenty
