import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPokemonByName = createAsyncThunk<Pokemon, string>(
    'user/loginByUsername',
    async (name, { rejectWithValue }) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json()
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(data)
        }
        return data
    }
)

// slice & selectors omitted